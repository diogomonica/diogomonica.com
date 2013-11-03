---
title: Dead Simple HTTPd in Python
date: '2011-04-11'
description:
tags: [ python ]
categories: code
---

Sometimes, this is all you need:

<pre>
glow:~ dmonica$ python -m SimpleHTTPServer 8000

Serving HTTP on 0.0.0.0 port 8000 ...
</pre>

This simple command has saved me hours of precious time. I've even used it to transfer files between multiple hosts (HTTP server on one end, one wget on all the other hosts). More details here.

 
