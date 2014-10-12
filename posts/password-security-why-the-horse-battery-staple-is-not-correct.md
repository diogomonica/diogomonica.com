---
title: 'Password Security: Why the horse battery staple is not correct'
date: '2014-10-11'
description:
tags: [passwords]
---

I’ve intentionally kept myself from commenting on Password Security in the wake of the last month’s mass iCloud account compromise. My feeling was that this topic had already been discussed to exhaustion, and there really was nothing new about the problem that was worth discussing.

However, as I read through the dozens of articles on [how to choose a strong password](http://www.independent.co.uk/life-style/gadgets-and-tech/is-apples-icloud-safe-how-to-create-a-stronger-password-and-turn-on-twostep-verification-9703485.html "How to choose a stronger password"), I realized that the majority of them are focused on trying to solve the wrong problem.

We should **not** be incentivizing people to choose passwords in the first place.

<img src="{{urls.media}}/password-security-why-the-horse-battery-staple-is-not-correct/xkcd_comic.png" width="300"/>

There are obviously a few situations where memorable passwords are a requirement, but if you write an [article](http://www.vice.com/read/your-password-is-not-secure-and-its-not-your-fault-102 "Vice your password is not secure") about choosing passwords where password managers aren't mentioned even once, you're not helping anyone.

In this post I’m going to make the following arguments:

- Choosing a password should be something you do very infrequently.
- Our focus should be on protecting passwords against informed statistical attacks and not brute-force attacks.
- When you do have to choose a password, one of the most important selection criteria should be how many other people have also chosen that same password.
- One of the most impactful things that we can do as a security community is to change password strength meters and disallow the use of common passwords.

## Users should not be choosing passwords

Every time someone writes about the topic of passwords the XKCD comic shown above up makes an appearance.

The fact is that the number of passwords you should memorize is pretty small, and there is no need of teaching users how to choose good passwords. Everyone knows what a good password looks like, we just can't memorize unique, strong passwords, for every single on-line service out there.

With the advent of password managers, the large majority of all passwords should just be randomly generated, and replaced with a single password that provides access to all the others. This solves both the strength and memorability problems for 95% of your passwords<sup><a id="ffn1" href="#fn1" class="footnote">1</a></sup>.

<img src="{{urls.media}}/password-security-why-the-horse-battery-staple-is-not-correct/password_pie.png" width="300"/>

The obvious exceptions to this rule are: the password manager's own vault key, laptop passwords, phone unlock codes, etc. Note, however, that this number of passwords is mostly static; it does not increase when you sign up for a new service.

Even if we entertained the XKCD comic and started training users to select four random words instead of a complex single-word password, I argue that it would not amount to a significant increase in security.

People are not very creative and tend to think the same way when choosing passwords. This would lead to the exact same problem we have now, where a few passwords such as "password123" become very common. What is there to prevent “letmeinfacebook” from being the new most common four word password for Facebook accounts?<sup><a id="ffn2" href="#fn2" class="footnote">2</a></sup>

## The Attacker Model is wrong

Bruteforcing passwords these days is hard. As a community we did a great job incentivizing the use of [bcrypt](http://en.wikipedia.org/wiki/Bcrypt) and [scrypt](http://en.wikipedia.org/wiki/Scrypt), and humiliating those who use [bad password hashing mechanisms](http://nakedsecurity.sophos.com/2013/11/04/anatomy-of-a-password-disaster-adobes-giant-sized-cryptographic-blunder/).

Unless your attacker model includes state actors, you really don’t have to be concerned about pure brute-force attacks. The most efficient attack against scrypt involves the compromise of your password hash and a lot of money spent on dedicated hardware to crack it offline, something the large majority of attackers does not have access to.

<img src="{{urls.media}}/password-security-why-the-horse-battery-staple-is-not-correct/nsa_eagle.jpg" width="200"/>

Without stealing the password hash, attackers are limited to trying username/password combinations over the internet, reducing the upper-bound of number of attempts per second by at least 3 orders of magnitude.

This means that we should stop blindly classifying password strength based on the number of bits of entropy<sup><a id="ffn3" href="#fn3" class="footnote">3</a></sup>, and should consider first and foremost how dictionary-attack resistant the passwords is.

## A better password validation criteria

Password validation heuristic rules, (e.g. minimum length, forceful use of alphanumeric characters, etc) are largely ineffective and are often counterproductive.

These heuristics are inadvertently leading users to the repeated use of very common solutions, which can be easily remembered, while still obeying the requirements. In fact, users typically circumvent the imposed pseudo-randomness by using a few common tricks ("p@ssw0rd" being a typical example), which are then used repeatedly.

This leads to the repeated use of what are, in fact, very weak passwords, highly vulnerable to statistical guessing attacks (a dictionary based attack ordered by decreasing probability of occurrence). 

When coupled with the predominance of dictionary based attacks and leaks of large password data sets, this situation has led, in later years, to the idea that the most useful criterion on which to classify the strength of a candidate password, is the frequency with which it has appeared in the past.

<div class="image_cont">
<img src="{{urls.media}}/password-security-why-the-horse-battery-staple-is-not-correct/distribution1.png" width="300" style="display:inline" />
<img src="{{urls.media}}/password-security-why-the-horse-battery-staple-is-not-correct/distribution2.png" width="300" style="display:inline"/>
</div>

This means that instead of a password strength meter you should be ensuring that there is no skew in the distribution of passwords. If each password is guaranteed to be unique, the advantage of a statistical guessing attack is greatly reduced.

There are [several](https://www.usenix.org/conference/hotsec10/popularity-everything-new-approach-protecting-passwords-statistical-guessing) [works](http://www.internetsociety.org/adaptive-password-strength-meters-markov-models) in the literature that propose such schemes, including one of [my own]({{urls.media}}/password-security-why-the-horse-battery-staple-is-not-correct/local_password_validation_with_soms_diogo_monica.pdf) (PDF).

<div style="text-align: center;">
<iframe src="//www.slideshare.net/slideshow/embed_code/38823827" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
</div>

## What we should do

I think the first step is to stop propagating the idea that there is a way of choosing memorizable passwords that will keep attackers at bay. This means no more “How to choose your password” blogposts.

The second step is to start using the password strength forms to promote better password hygiene. I have seen a lot of [stupid password strength forms](http://www.badpasswords.org/), but I have never seen one that tells the user generate and store the password in a password manager.

Finally, we should be evaluating the strength of passwords based on the frequency of appearance of those passwords, and not merely based on heuristics and misguided entropy calculations.

## Ultimately, Passwords should die

As a longer term strategy, we are moving to kill the use of passwords as the single authentication mechanism, and enforcing multi-factor authentication as the default everywhere. 

For the time being, we should focus some of our efforts on providing passwords the essential Basic life support they need.

## Conclusion

- Users don’t need password memorization schemes, they need to be incentivized to use a good password manager.
- For the few passwords they do need to memorize, you should focus on making them dictionary-attack resistant, not just strong from an information theory perspective.

<ol id="footnotes">
  <li id="fn1">Not derived from real data. <a href="#ffn1">↩</a></li>
  <li id="fn2">If you analyze any of the large password leaks of the last few years you will notice that people tend to use the name of the service as part of their passwords. <a href="#ffn2">↩</a></li>
  <li id="fn3">Obviously a decent minimum number of characters should still be enforced.<a href="#ffn3">↩</a></li>
</ol>