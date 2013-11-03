---
title: Monitor VS Promiscuous
date: '2011-01-06'
description: Differences between Monitor VS Promiscuous mode in wireless NICs
summary: One of the confusions I see often in wireless sniffing related discussions, is the difference between Monitor and Promiscuous mode.
tags: [ wifi, sniffer, osx ]
categories: code
---

One of the confusions I see often in wireless sniffing related discussions, is the difference between Monitor and Promiscuous mode.

Many people seem to think that setting the wireless interface in promiscuous mode is equivalent to setting it in monitor mode. It is **not**.

The difference lies in the ability of a wireless card in monitor mode to sniff a wireless network to which it is not currently associated with. This means that, in both modes you will be able to receive frames that have a destination MAC address that fails to match your local network interface's MAC address (instead of having them being dropped). However, a wireless network card in promiscuous mode is only able to do so in a network to which it is currently associated with.

On the other hand, if your NIC supports monitor mode, you will be able to sniff the packets sent by every device transmitting on the specific channel you are listening to. This means that if you need one of the following features, your card has to support monitor mode:

 * 802.11 Management and Control frames

 * Retrieve physical layer information such as rates, signal strength and channel number

 * Scanning multiple channels quickly

 * Retrieve 802.11 headers, obtaining information like sequence numbers and Retry flags

To get more information about monitor mode, and how to use it, go here: http://www.aircrack-ng.org/doku.php?id=airmon-ng.

 
