---
title: Facebook Sidejacking
date: '2011-04-04'
description: py-cookieJsInjection is a python script that sniffs cookies from the network, and outputs Javascript code that can be used to inject the cookies into any browser.
summary: "I've just released a tool called py-cookieJsInjection on github (see Part II of this post here).

py-cookieJsInjection is a python script that sniffs cookies from the network, and outputs Javascript code that can be used to inject the cookies into any browser.

It can be used to sniff and replicate any cookies going on the wire or to filter out specific information, such as Facebook profiles"
tags: [ facebook, python, sidejacking, cookie ]
categories: code
---

I've just released a tool called py-cookieJsInjection on github (see Part II of this post here).

py-cookieJsInjection is a python script that sniffs cookies from the network, and outputs Javascript code that can be used to inject the cookies into any browser.

It can be used to sniff and replicate any cookies going on the wire or to filter out specific information, such as Facebook profiles:
<pre>
glow$ sudo python cookieJsInjection.py en1 -facebook
</pre>

<img src="https://media.tumblr.com/tumblr_leml9t3nfp1qevk7j.png" style="float:left;margin:0px 30px 0px 0px;" />


Afterwards, you just copy & paste the Javascript injection code given, onto the URL bar, press enter and go to facebook.com.

Instead of trying to guess which cookie parameters are important for each website, py-cookieJsInjection just outputs the javascript code replicating the cookies exactly as they are seen on the wire. It can, therefore, be used for websites other than facebook. It is also a pretty handy cookie debugging tool!

## What is Sidejacking?

Sidejacking is essentially a form of HTTP session hijacking that works with “passive” eavesdropping of network traffic.

A HTTP session hijacking happens when an attacker is able to steal a user's "session cookie". These session cookies are what identify user sessions in password protected websites (such as facebook). This cookie is sent to the remote (facebook) server, by your browser, each time you go back to the website (facebook.com), so you don't have to enter your password every time.

It has gained mainstream attention recently, due to the release of a tool called firesheep, that allows virtually any user with a Firefox browser to launch sidejacking attacks on an unprotected wireless network (or WEP protected, for that matter).

## Why py-cookieJsInjection?

py-cookieJsInjection was built for mainly one reason: because one should not be required to have firefox, in order to launch sidejacking attacks easily ;).

There are awesome tools like Hamster and Ferret, that allow to connect through a proxy, automatically rewriting the desired cookies on behalf of the hacker. However, they require a user to build and install both Hamster and Ferret, something which may prove both cumbersome and time-consuming.

There is also CookieMonster, from Mike Perry's Epic Saga; a complex tool that takes sidejacking a bit further by tracking the HTTPs websites visited by wireless client IPs, and automatically injects HTML elements that causes any insecure HTTPs cookies to be transmitted unencrypted. This will, in fact, be the topic of a future tool/post. =)      

Finally, you could do it by hand, and sniff the packets on the wire, with tools like Wireshark or TCPdump.         

py-cookieJsInjection only requires scapy, in order to operate. Also, it outputs javascript code that may be used in any modern browser to inject the captured cookies, by simply putting it into the url bar, and pressing enter.

Finally, it is easily extensible, and can be used by other tools that require some, or all of it's functionality (as will be seen in my next post).

## More information?

You can get more information about the tool (and the tool itself), here: <https://github.com/diogomonica/py-cookieJsInjection>. 
