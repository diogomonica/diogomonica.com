---
title: Weird packet of the day #1
date: '2013-07-14'
summary: "Once in a while I open wireshark and just look at my baseline traffic. It's useful for when I actually want to find something weird to quickly distinguish between what's normal and what looks fishy."
tags: [ sleuthing, networking ]
categories: protip

---

Once in a while I open wireshark and just look at my baseline traffic. It's useful for when I actually want to find something weird to quickly distinguish between what's normal and what looks fishy.

## Weird traffic

One of the quickest ways of discarding normal traffic is by looking at the destination hosts and ports. This is one of those cases where both the destination reverse lookup and the port looked weird to me.

<img src="https://s22.postimg.org/sqgishxyp/Screen_Shot_2013_07_14_at_12_42_34_PM.png" style="center" width="1000" height="350"/>

Well, hpvirtgrp sounds like it should be something along the lines of HP Virtual Machine Group Management. I'm pretty sure there should be no HP-related traffic coming from my host, specially to some random domain on the internet.

Lets see what's using this port:

<pre>
# netstat -b | grep 5223
tcp4       0      0  10.0.1.22.62497 ie-in-f125.1e100.5223  ESTABLISHED
# lsof -i | grep 5223
imagent     333 diogo    6u  IPv4 0x79c68369b31f8d65      0t0  
TCP 10.0.1.22:62497->ie-in-f125.1e100.net:5223 (ESTABLISHED)
# ps aux | grep imagent
diogo            333   0.0  0.2  2540616  40544   ??  S    Sun02PM   
1:52.36 /System/Library/PrivateFrameworks/IMCore.framework/imagent.app
/Contents/MacOS/imagent
</pre>

So it seems that port 5223 is being used by a process called imagent to connect remotely to this domain: ie-in-f125.1e100.net. What is imagent? [Let me google that for you](http://lmgtfy.com/?q=imagent).

Turns out that this process is part of IMCore.framework and used by Facetime (and more generically Messages) to coordinate with our buddies. A simple strings on the binary validates this theory:

<pre>
# strings imagent
...
joinChatID:handleInfo:identifier:style:joinProperties:account:localObject:
leaveChatID:identifier:style:account:localObject:
invitePersonInfo:withMessage:toChatID:identifier:style:account:localObject:
declineInvitationToChatID:identifier:style:account:localObject:
sendMessage:toChatID:identifier:style:account:localObject:
sendReadReceiptForMessage:toChatID:identifier:style:account:localObject:
...
</pre>

Cool, to it looks like this belongs to Apple and it's not some rogue process. What's up with the weird domain then:

<pre>
# whois 1e100.net
...
Registrant:
        DNS Admin
        Google Inc.
        1600 Amphitheatre Parkway
         Mountain View CA 94043
        US
        dns-admin@google.com +1.6502530000 Fax: +1.6506188571

    Domain Name: 1e100.net
...
</pre>

Wait, what? So this application is talking to a domain that is owned by google? Also, this domain seems to be parked by Sedo's domain parking (that doesn't seem very googlesc):

<img src="http://s24.postimg.org/ycb7lg7w5/Screen_Shot_2013_07_14_at_11_39_40_AM.png" style="center" width="600" height="400"/>

A little bit more digging shows me that port 5223 is actually also used for jabber-ssl which reminds me that I have my gtalk configured on my Messages app. To validate this, I started another wireshark capture, and I send a few messages to my friends, and saw the same traffic pattern show up. 

I'm still not clear on why google is using this domain pattern, or why did they let the domain be parked by Sedo, but from a L3/4 perspective: <b>Mystery solved</b>.

<b>EDIT:</b> Looks like I'm an idiot and [1e100 is a googol](http://www.seroundtable.com/archives/021639.html) (I should have seen that one coming). Thanks Ben for pointing it out.

