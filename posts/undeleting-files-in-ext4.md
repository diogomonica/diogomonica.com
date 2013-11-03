---
title: "Raising the dead - Undeleting files in ext4"
date: '2012-08-05'
summary: "Chances are that you have, at least once in your life, deleted files that you had no backups of. This is the story of how I partially recovered some of my files after deleting them on a Linux ext4 filesystem."
tags: [ ext4, unix ]
categories: protip
---

Chances are that you have, at least once in your life, deleted files that you had no backups of. This is how I **partially** recovered some of my files after deleting them on a Linux ext4 filesystem.

## F*%$ Now what?

You just deleted something you didn't want to delete? Take a few minutes to curse. Believe me, it helps.

The first thing you should do is to figure out what you are up against. What is the OS you are running on that specific machine? What filesystem are you using?

<pre>
$ sudo uname -a
$ sudo fdisk -l
$ sudo blkid
</pre>

After you are done with gathering this information, shutdown the machine. This will ensure nothing will overwrite the files you just deleted, and it will thus increase the probability of a successful recovery.

## Get the right tools

Given the situation, your best option is to boot the machine using a live CD. I recommend using [BackTrack](http://www.backtrack-linux.org/), which comes bundled with a few useful forensics tools.

In my particular case the filesystem I was using was ext4. This meant that my only option was to run [extundelete](http://extundelete.sourceforge.net/) (conveniently bundled into backtrack).

## Convenience setup

After burning the ISO (or using a bootable usb pen), boot your computer into BackTrack. 

For rack-mountable servers that you have no easy access to, I recommend enabling remote ssh:

<pre>
 $ service ssh start
 $ sshd-generate
 $ passwd root
</pre>

These commands will allow you to ssh remotely into the BackTrack liveCD.

## LVM Partition?!

If your partition is a LVM Partition, these are the steps you will need to execute to be able to successfully mount it:

<pre>
 $ sudo apt-get install lvm2
 $ sudo modprobe dm-mod
 $ sudo vgscan
 $ sudo vgchange -ay VOLUME_NAME
 $ sudo lvs
 $ sudo mkdir /mnt/thisblows
 $ sudo mount /dev/VOLGROUP/VOLUME_NAME /mnt/thisblows -o ro,user
 </pre>

## Actually undeleting stuff

After everything is mounted you can now run extundelete:

<pre>
 $ extundelete /dev/mapper/VOLUME_NAME --restore-all 
</pre>

This command will create a RECOVERED_FILES folder in the your current directory. Make sure you are in /tmp or some other LiveCD in-memory partition. After you recover the files, *scp* them off to a remote machine and you are **done**.

Good luck.