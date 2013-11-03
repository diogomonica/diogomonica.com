---
title: Change your MAC with py-MACtool
date: '2011-01-16'
summary: "I've had to change my MAC address for countless reasons. Either because I was doing some penetration testing, or just to debug some network errors..."
tags: [ mactool, mac, python ]
categories: code
---

I've had to change my MAC address for countless reasons. Either because I was doing some penetration testing, or just to debug some network errors.

The most recent motive for changing my MAC Address was: fun. I had set up airdrop-ng (<http://www.aircrack-ng.org/doku.php?id=airdrop-ng>) to drop all wireless clients from my university wireless network, except the ones whose MAC address begins with DE:AD:BE:EF. Obviously, I configured the MAC addresses of all my hosts to begin with that prefix.

<img src="https://media.tumblr.com/tumblr_lf4fkqSO761qevk7j.png" style="float:left;margin:0px 30px 0px 0px;" />

However, when changing from OS X to Linux, the command-line syntax changes. And that gave me the idea of doing a simple script that I could call, independently of the host I was in. Also, I wanted the ability to generate a random MAC Address, or a random MAC address from a specific Manufacturer.

Thus, py-MACtool (<https://github.com/diogomonica/py-MACtool>) was born. It works on both Linux and OS X, generating and changing the MAC address of a chosen interface, also allowing: the random generation of a MAC address; generation of a random MAC address beginning with a given prefix; and also, generation of a random MAC address from any manufacturer (I'm using the wireshark's manufacturer list as the source).

For example, if I wanted to generate an Apple MAC Address I would do:
<pre>
husk:py-MacTool hip$ sudo python MACtool.py -m Apple en0 
[+] Found Manufacturer List: manufacturer_list.txt 
[*] Generated MAC address: 00:26:08:0f:09:1a for device en0
[*] Done
</pre>

If, on the other hand, I wanted my MAC address to begin with DE:AD:BE:EF, I could do: 

<pre>
husk:py-MacTool hip$ sudo python MACtool.py -p de:ad:be:ef en0 
[*] Generated MAC address: de:ad:be:ef:55:0e for device en0 
[*] Done
</pre>

You can get the source for py-MACtool on github. Also, if you just want the wireshark manufacturer wrapper, you can download getMAN.py directly.
