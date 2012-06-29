---
title: Sniffing in Monitor Mode with Airport
date: '2011-04-10'
summary: "Sniffing in OS X has been a reality for quite some time, thanks to the effort of people like the guys from Kismet and KisMAC..."
categories:
---

Sniffing in OS X has been a reality for quite some time, thanks to the effort of people like the guys from Kismet (<https://www.kismetwireless.net/>) and KisMAC (<http://trac.kismac-ng.org/>).

<img src="http://2.bp.blogspot.com/_Za6UPEUpjR4/TRjc5y3WUDI/AAAAAAAABJo/qHwe92cFBpo/s320/how_to_hack_wifi.jpg" style="float:right;margin:0px 30px 0px 0px;" />

In the old days (Old OSX versions), they used undocumented IOCTLs and modifications to parameters in the kernel module bundles, to be able to set the airport in monitor mode.

In the new versions of OS X, however, Apple introduced a new API for setting the wireless state, that unfortunately, wasn't entirely reliable until the latest version of Snow Leopard.

So right now, we are able to use mostly any OS X macbook, or iMac, for wireless sniffing in monitor mode in a reliable fashion (there is still no support for injection, though).

However, most of the time I just need to hack something quickly, and implementing an application that uses the same mechanisms as Kismet and KisMAC to be able to sniff packets in monitor mode, is way too cumbersome.

This is where this nifty tool comes in: airport. Let's start by making a link from the original location, to one in which your shell can find it:

<pre>
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/\
Versions/Current/Resources/airport /usr/sbin/airport
</pre>

After this, you can sniff any channel in monitor mode, with your airport card:

<pre>airport sniff CHANNEL</pre>

<img src="http://media.tumblr.com/tumblr_lewz1r7BZM1qevk7j.png" style="float:right;margin:30px 30px 30px 30px;" />

After executing this command, your wireless card is in monitor mode sniffing the channel you specified. There should be an eye on the airport symbol:

<img src="http://media.tumblr.com/tumblr_lesa46fufK1qevk7j.png" style="float:left;margin:0px 30px 0px 0px;" />

From this moment on, airport will save all the packets seen in specified channel, to a randomly created file in /tmp. The file name has the following template: airportSniffXXXXXX.cap. However, the tool does not give any easy way of accessing the data, since the file is only output when the process is killed.

<img src="http://media.tumblr.com/tumblr_lewz4yQRmw1qevk7j.png" style="float:right;margin:0px 30px 0px 0px;" />


So what I wanted to do was to use a packet manipulation tool, like scapy, on the data output from airport. However, given that the data is only output from airport when the process exits, this is what I did:

<pre>
while(True):            
        p = Popen("airport " +"sniff " + channel, shell=True)
        time.sleep(SLEEP_TIME)
        Popen("kill -HUP %s" % p.pid, shell=True)
        doSomething()
</pre>

This simple python loop calls airport, sleeps for a predetermined amount of time (SLEEP_TIME), and then sends an HUP signal to the airport process (effectively forcing it to create the output file). This is an ugly hack, I know, but it works.

Just one aditional thing, it is probably a good idea to use threads to execute doSomething(), so the loop won't block while waiting for this function to finish running (avoiding the loss of packets unnecessarily).

If you remember, in my last post I built py-cookieJsInjection, a python application that sniffs cookies from the network, and outputs Javascript to be injected into the browser. I've used the above trick to create an OS X Cookie Sniffer that uses monitor mode to capture cookies.

To run it, you need to have scapy installed. After that you just run OSx10.6_monitorMode.py, and enjoy the cookies:

<pre>
python OSx10.6_monitorMode.py CHANNEL
</pre>

You can get the source code directly from here. The great thing about OSx10.6_monitorMode.py, is that it is independent of the type of card being used. As long as airport sniff works on the system, we are able to use it. We are, thus, letting Apple do all the driver work for us (less probability of this being broken on the next versions of OS X). Neat.

### Tested on:

* iMac 24'' - Card Type: AirPort Extreme  (0x14E4, 0x8E)
Firmware Version: Broadcom BCM43xx 1.0 (5.10.131.36.1)
OS X 10.6.5

* iMac 21'' - Card Type: AirPort Extreme  (0x168C, 0x8F) 
Firmware Version: Atheros 9280: 2.1.14.5
OS X 10.6.6
If you test this software, please, send in your setup, so I can add it to the working list.
