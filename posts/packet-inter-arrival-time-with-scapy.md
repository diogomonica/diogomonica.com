---
title: Packet Inter Arrival Time With Scapy
date: '2011-02-01'
description:
summary: I wanted to capture, for statistical purposes, the inter-arrival time of packets sent from a remote machine.
categories:
---

I wanted to capture, for statistical purposes, the inter-arrival time of packets sent from a remote machine. 
In scapy, all packets have a parameter "time", which contains the unix time of the system when the packet is received.

If I send the two following packets: 

<pre>
hybrid:~ diogomonica$ scapy 
Welcome to Scapy (2.0.1) 
>>> send(IP(dst="XXX.XXX.XXX.XXX")/UDP(dport=8000)/"TAG1") 
. 
Sent 1 packets. 
>>> send(IP(dst="XXX.XXX.XXX.XXX")/UDP(dport=8000)/"TAG2") 
. 
Sent 1 packets. 
</pre>

The following script is able to extract their inter-arrival time (this assumes you already have a .pcap where you sniffed the arrival of both packets):

<pre>
from scapy.all import * 

capture = rdpcap(sys.argv[1]) 

for packet in capture: 

   if packet.haslayer(UDP) and packet.haslayer(IP) and packet.haslayer(Raw): 

      if packet.getlayer(Raw).load == sys.argv[2]: 

         start = packet.time 

      if packet.getlayer(Raw).load == sys.argv[3]: 

         end = packet.time 

         print (end - start)*1000 
</pre>

Executing the script with the pcap file, and both payload strings, as arguments, we get the time (in milliseconds) between the arrival of both packets: 

<pre>
hybrid:~ diogomonica$ python interarrival.py XXX.pcap TAG1 TAG2 
81.1150074005
</pre>
