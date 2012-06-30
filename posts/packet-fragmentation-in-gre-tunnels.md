---
title:
date: '2012-06-28'
description:
categories:
tags: []

type: draft
---

<pre>
ifconfig ${Interface} mtu ${SIZE} up
ifconfig eth1 mtu 9000 up
</pre>

Cisco take on the subject: <http://www.cisco.com/en/US/tech/tk827/tk369/technologies_tech_note09186a0080093f1f.shtml>
Juniper's FAQ about GRE fragmentation: <http://kb.juniper.net/InfoCenter/index?page=content&id=KB12393&cat=TUNNELING_PROTOCOLS&actp=LIST>

SOurces:
http://www.pointless.net/~jasper/consume/docs/my-docs/mtu.html
http://stackoverflow.com/questions/2779198/benefits-of-dont-fragment-on-tcp-packets

The DF flag is typically set on IP packets carrying TCP segments.

This is because a TCP connection can dynamically change its segment size to match the path MTU, and better overall performance is achieved when the TCP segments are each carried in one IP packet.

So TCP packets have the DF flag set, which should cause an ICMP Fragmentation Needed packet to be returned if an intermediate router has to discard a packet because it's too large. The sending TCP will then reduce its estimate of the connection's Path MTU (Maximum Transmission Unit) and re-send in smaller segments. If DF wasn't set, the sending TCP would never know that it was sending segments that are too large. This process is called PMTU-D ("Path MTU Discovery").

If the ICMP Fragmentation Needed packets aren't getting through, then you're dealing with a broken network. Ideally the first step would be to identify the misconfigured device and have it corrected; however, if that doesn't work out then you add a configuration knob to your application that tells it to set the TCP_MAXSEG socket option with setsockopt(). (A typical example of a misconfigured device is a router or firewall that's been configured by an inexperienced network administrator to drop all ICMP, not realising that Fragmentation Needed packets are required by TCP PMTU-D).

http://www.faqs.org/rfcs/rfc879.html
      HOSTS MUST NOT SEND DATAGRAMS LARGER THAN 576 OCTETS UNLESS THEY
      HAVE SPECIFIC KNOWLEDGE THAT THE DESTINATION HOST IS PREPARED TO
      ACCEPT LARGER DATAGRAMS.

hahaha, lol.

http://www.cisco.com/en/US/tech/tk870/tk877/tk880/technologies_tech_note09186a008011a218.shtml

http://www.bitsonwire.com/?p=30

Wrong?http://publib.boulder.ibm.com/infocenter/pseries/v5r3/index.jsp?topic=/com.ibm.aix.prftungd/doc/prftungd/tcp_max_seg_size_tuning.htm

http://www.tcpipguide.com/free/t_TCPMaximumSegmentSizeMSSandRelationshiptoIPDatagra-3.htm
