---
title: It's not just the salt, stupid
date: '2012-07-10'
summary: "There have been hundreds of articles about the recent password hash leaks from Linked-in and eHarmony. 

One particular detail that most of these articles seem to have in common is the fact that they point at the inexistence of a 'salt' as the security mistake that made this leak particularly damaging…"
tags: [ salt, linkedin, bcrypt ]
categories: crypto
---

There have been hundreds of articles about the recent password hash leaks from [Linked-in](http://www.tomshardware.com/news/LinkedIn-Password-Breach-hack-eharmony,15963.html) and [eHarmony](http://www.networkworld.com/news/2012/070612-eharmony-data-breach-260709.html). One particular detail that most of these articles seem to have in common is the fact that they point at the inexistence of a "salt" as **the** security mistake that made this leak particularly damaging. While it is true that the salt is a very important component of any good password hashing algorithm, there are a multitude of other potential issues that have to be taken into consideration.

UPDATE: [Formspring](http://techgeek.com.au/2012/07/11/formspring-security-breac/) was also compromised. In this case the passwords were SHA-256 and they were salted.

## Salting

Salting is a good protection against [rainbow tables](http://en.wikipedia.org/wiki/Rainbow_table "Rainbow Tables"), or more generally against [time-memory trade-off](http://en.wikipedia.org/wiki/Space%E2%80%93time_tradeoff "Time-Memory tradeoff") attacks. The existence of the salt increases the memory required to store pre-computed hashes to a point where it is prohibitively expensive to do so. However, it does nothing to protect against targeted brute-force attacks of a single password. An attacker attempting to crack a single password can still brute-force it the old-fashion way. Moreover, with the advent of [cloud computing](https://cloudcracker.com/ "Cloud Cracker") and with the significant decrease in the prices of FPGAs, we can no longer assume that the computational resources available to an attacker are the same as the ones a normal user has access to. This is where stretching comes in.

## Key Stretching

[Key stretching](http://en.wikipedia.org/wiki/Key_stretching "Key Stretching") is a way to force the attacker to spend a configurable amount of time on each hash attempt. By sequencing the application of algorithms that take a constant amount of time to compute, we are able to insert an arbitrary delay in each hash generation step.

While not as important as salting, you should not use a hashing algorithm that doesn't have this technique built-in.

## My point being

This has been said a million times, but it needs to be said once more: you should **not** roll your own crypto. Crypto is hard to get right and there are already several known [password](http://en.wikipedia.org/wiki/Bcrypt "Bcrypt") [hashing](http://www.bsdcan.org/2009/schedule/events/147.en.html "Scrypt") [algorithms](http://en.wikipedia.org/wiki/PBKDF2 "PBKDF2"), together with several good implementations, available out there.

<br/>

> Anyone can invent an encryption algorithm they themselves can't break; it's much harder to invent one that no one else can break. - **Bruce Schneier**

<br/>

Your choice should be between [Bcrypt](http://en.wikipedia.org/wiki/Bcrypt "Bcrypt"), [Scrypt](http://www.bsdcan.org/2009/schedule/events/147.en.html "Scrypt") and [PBKDF2](http://en.wikipedia.org/wiki/PBKDF2 "PBKDF2"). There are [some](http://www.unlimitednovelty.com/2012/03/dont-use-bcrypt.html) that argue that you shouldn't use Bcrypt. However, while Scrypt seems to be stronger than Bcrypt, it is also more recent - and in crypto you should also have a healthy fear of new algorithms. As for PBKDF2, it is a NIST standard but doesn't have as many good implementations as Bcrypt. Overall, the choice between the three isn't really relevant, but please make sure you use any one of them.

<img src="http://imgs.xkcd.com/comics/security.png" style="center;margin:0px 30px 100px 270px;" />
