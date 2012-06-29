---
title: Merging multiple .pcap files
date: '2011-01-27'
summary: Today I needed to merge 40 ~600Mb .pcap files into one humongous capture file...
categories:
---

Today I needed to merge 40 ~600Mb .pcap files into one humongous capture file.

Since I was doing this server sided and I'm a tcpdump.org kind of person, I installed tcpslice.

tcpslice - extracts pieces of and/or merge together tcpdump files

Using tcpslice, I simply did:
<pre>
root@privato:~/traces# time tcpslice *.pcap -w full.pcap
</pre>

I could have used the mergepcap from the Wireshark package, but I didn't have wireshark installed, and as I mentioned, I'm a tcpdump kind of guy ;).
