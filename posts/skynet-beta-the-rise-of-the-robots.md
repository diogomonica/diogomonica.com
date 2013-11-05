---
title: 'Skynet (beta): The rise of the Beam robot'
date: '2013-11-03'
description:
tags: [ beam, java, python, TLS, mitm]
categories: sleuthing
---

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_robot.jpg" width="250" style="float:right;"/>

At work we bought a few telepresence robots from [SuitableTech](https://suitabletech.com/) called Beam. The Beam robots allow anyone from a remote location to have face-to-face interaction with the people at our HQ.

Each Beam robot boasts two wide-angle HD cameras, a 6-microphone array that cancels echo and reduces background noise, a 17" screen, and a built-in speaker. It has a top speed of 3mph, and the battery lasts for 8 hours of active use.

The first thing that I thought when I used them the first time was how amazing the video/sounds quality was. The second was, <ux class="highlight"><b>can I hack it?</b></ux>

# The perfect trojan-horse

What could be better than having an employee as an insider at a company? Having an insider robot, of course. Particularly one that has 2 HD cameras, a microphone and wheels to stroll around the office at 3am.

Each Beam is tied to an organization. To be able to control a Beam robot you have to use SuitableTech's client application and have been invited by the administrator the organization. You also have to create an account at suitabletech.com and use those credentials to login to the client app.

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_diagram.png" width="600" style="display: block;margin-left: auto;margin-right: auto" />

# The client application

There were several different ways of trying to take control of the beams. I started by trying to understand how the beams were receiving the commands from the client application. It turns out, I didn't really have to go any further than that.

This is what the client application looks like:

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_login.png" width="400" style="display: block;margin-left: auto;margin-right: auto" />

By providing correct credentials you are then able to select one of the Beam robots available and start the remote control session.

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_control.png" style="display: block;margin-left: auto;margin-right: auto" />

Inspecting the network communication using wireshark, it becomes obvious that the authentication is being done via a TLS-encrypted XMPP connection.

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_tls_hello.png" style="display: block;margin-left: auto;margin-right: auto" />

The application communicates with two different remote-servers: xmpp.suitabletech.com and suitabletech.com. Initially, several plain-text XMPP messages are exchanged, but then the client sends a STARTTLS connection and after the TLS negotiation all data begins being sent encrypted. This seems like a solid design.

I ran the Beam application directly from the command-line and I got some very useful debugging information. Of particular relevance was this warning line:

<pre>
WRN 17:36:28 talk/base/openssladapter.cc:867 Ignoring cert error while verifying cert chain
</pre>

Ok, that seems bad. Let's see what google has to tell me in terms of where this error originates. I quickly find lines <b>851-855 of libjingle's openssladapter.cc</b>:

<pre>
// Should only be used for debugging and development.
if (!ok && stream->ignore_bad_cert()) {
  LOG(LS_WARNING) << "Ignoring cert error while verifying cert chain";
  ok = 1;
}
</pre>

Wow. It seems that the Beam client application by default comes configured in debug mode and therefore it <ux class="highlight"><b>ignores the remote certificate validation</b></ux>. Neat.

With this in mind, I set out to understand how the XMPP protocol works, and exactly what a XMPP client expects of the server. By creating a simple Java application that proxies every connection that passes through it, printing out the messages from the client and the servers, and a little bit of DNS spoofing I was able to understand exactly what the Beam application and the Suitable Tech’s servers were exchanging right until the TLS tunnel is setup.

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_message_exchange.png" style="display: block;margin-left: auto;margin-right: auto" />

It turns out that the XMPP protocol supports dropping the authentication mechanism to plaintext, so I generated a new self-signed certificate for suitabletech.com and wrote a python script that emulates the [server-side XMPP communication](https://gist.github.com/diogomonica/a24a7285f31804d37144), conveniently asking the client to authenticate via the PLAIN mechanism.

I guess it's time to <b>steal some passwords</b> :).

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_mitm_1.png" style="display: block;margin-left: auto;margin-right: auto" />

As expected, and from what we were able to infer from the warning message on the console, the client is blindly accepting any certificate, happily providing the plain-text user’s credentials to our fake server.

<img src="{{urls.media}}/skynet-beta-the-rise-of-the-robots/beam_mitm_2.png" style="display: block;margin-left: auto;margin-right: auto" />

# Disclosure Timeline

The team at SuitableTech seems to be really awesome, and they were super quick to both confirm the vulnerability and to patch it.

* June 16th: Vulnerability Discovered

* June 18th: Initial Report finished

* June 18th: Report sent to SuitableTech

* June 18th: Vulnerability Confirmed by SuitableTech

* June 20th: New version of the Beam app (1.17.1) is published and email gets sent out to all Beam admins to update.

# Conclusions and Future work

I had a lot of fun playing with the Beams. It turned out that compromising credentials from the client application was surprisingly easy, allowing arbitrary Beam control to any attacker capable of a MITM attack during login. In this particular case, the most damaging atack would be to cruise around the remote office and maybe steal a few secrets, but what if the Beam's had [laser beams attached to their heads](https://www.youtube.com/watch?v=Q5BAnPeXYTI)?

I still intend to try attack the Beams directly and see if I can get anything there, but as I mentioned before, the conceptual security model for the Beams seems to be pretty solid and I doubt I'm going to be able to find any other trivial issues like this. 

This said, you never know ;).