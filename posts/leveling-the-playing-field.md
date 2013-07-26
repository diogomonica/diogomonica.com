---
title: Bot wars - The arms race of restaurant reservations in SF
date: '2013-07-24'
summary: "I love food. This means that I'm bound to compete for reservations at good restaurants with the the hipsters that are native to San Francisco. This is a peek into the arms race going on in restaurants reservation right now."
---

I love food. This means that I'm bound to compete for reservations at good restaurants with the hipsters that are native to San Francisco. This is a peek into the arms race going on in restaurant reservations right now.

<b>TL;DR</b>: Get the code to make automatic reservations at any Urbanspoon restaurant [here](https://gist.github.com/diogomonica/6076911).

## State Bird Provisions

About a year and a half ago I fell in love with [State Bird Provisions](http://statebirdsf.com/) (SBP for short). The restaurant is nothing short of spectacular. Unfortunately, SBP got [noticed](http://statebirdsf.com/press/) by the San Francisco foodie community. This meant that the [reservations page](http://statebirdsf.com/reservations/) started to consistently return the following status:

<br/>

> No reservations are currently available. Reservations are taken online up to <b>60 days in advance</b>. As tables become available, they will be shown here.

## Quick and dirty

One day I sat down, sshed into my remote server and wrote the following chron job (of which I am <b>not</b> proud):

<pre>
#! /bin/bash
url="http://rez.urbanspoon.com/b/widget/2086?background=ebf3fd&
border=bbd4f1&header=000&link=0144a7&locale=en&source=selfhost&text=000"
hash=`cat /tmp/state_bird`
`curl $url | md5sum | awk '{print $1}' > /tmp/state_bird`
newhash=`cat /tmp/state_bird`
if [[ "$hash" != "$newhash" ]]; then echo "Reservations page just changed: 
http://statebirdsf.com/reservations/ - $newhash" | mail -s Reservations EMAIL; fi
</pre>

If you ignore the part where this code is utterly crappy, you can see that it actually sends out an email every-time the reservation page changes. I set it to run once a minute, and I let it run.

With this quick hack I learned a few things:

* New reservations open around 4am.

* People wake up at 4am to get reservations.

* At 5am most of the reservations were gone.

* Once a reservation got canceled I would get an email and could quickly get it for myself.

<br/>

This meant that I would either get reservations for 60 days in the future, or I would get a random draw of same-day or next-day reservations that would come from last minute cancellations.

## Escalation of Violence

After a while of running this script I had captured a good amount of data. One day I found myself looking at it and noticed that as soon as reservations became available on the website (at 4am), all the good times were immediately taken and were gone by 4:01am. It quickly became obvious that these were reservation bots at work.

After a while even cancellations started being taken immediately from under me. It started being common receiving an email alerting of a change, seeing an available time, and it being gone by the time the website loaded.

## Leveling the playing field

You fight fire with fire, so I made my own reservation bot. You can get the code [here](https://gist.github.com/diogomonica/6076911).

I used mechanize to create a simple ruby script that goes through the process of checking for available reservations (in a given time range) and making a reservation under your name.

With this script I was able to start getting reservations again, but I know that this bot war will continue to escalate. Expect future posts on how I will adapt my strategies as the arms race continues to heat up.
