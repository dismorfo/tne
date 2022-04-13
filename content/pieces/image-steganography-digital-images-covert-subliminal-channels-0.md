---
title: "Image Steganography: Digital Images as Covert, Subliminal Channels"
nid: 291
type: pieces
date: 2014-01-26T16:37:54+00:00
display_date: Sunday, January 26, 2014
part_of: http://192.168.0.5:8080/tne/api/v1/spoke/291/partof
comments: http://192.168.0.5:8080/tne/api/v1/spoke/291/comments
contributors: http://192.168.0.5:8080/tne/api/v1/spoke/291/contributors
draft: false
---

In this contribution we consider the role of digital steganology, the study of concealing information or instructions within digital images in order to establish a covert, subliminal communications channel between two parties while others remain oblivious of its existence.

Steganology (Greek στεγανός, "covered, protected”, and λογία, "study") must be clearly distinguished from cryptology, the study of secrets (Greek κρυπτός, "hidden, secret"; and λογία, "study") in which information or instructions are made unintelligible to third parties but no effort is made to conceal the existence of the communications channel.

A covert, subliminal (literally: “below the threshold”) channel is one that can be used to communicate information or instructions with a very low risk of detection by third parties. As such it has the potential for the infiltration of malicious instructions into or the exfiltration of sensitive information from an organisation or system.

In particular, digital image steganography makes use of the observation that it is possible to make visually imperceptible changes to a digital image, known as the cover image, by carefully and systematically embedding a digital message within it. While steganology has been employed for military and diplomatic purposes since ancient Greece, it came into its own with the digital revolution of the late twentieth century and in particular with the various standard formats for representing digital images, such as BMP, GIF, JPEG, TIFF, PNG, *etc*.

A digital image in any of the above formats is composed of a very large number, typically several million, pixels (‘picture elements’), each having a particular hue (*e.g.* red or blue), saturation (*e.g.* dark or light) and intensity (*e.g*. bright or pale). Each of the pixels is created by combining together various proportions of red, green and blue light using one of a number of different physical techniques, depending on the technology employed by the graphics device. We will not concern ourselves here with the different physical processes behind cathode ray tube (CRT), light emitting diode (LED) and liquid crystal display (LCD) graphics devices. The proportions of red, green and blue (RGB) light required to colour any pixel are given by three whole numbers (‘integers’) between zero and 255 in basic graphics devices (or 65,535 in more advanced systems). The Table below gives some examples of RGB values for pixels of various colours in a basic graphics system.

The maximum value for each RGB component of each pixel is significant: since all digital devices use the binary (base 2) number system to represent all information and instructions, including the value of each RGB component, the basic graphics device needs 8 bits (‘binary digits’) to represent all the integers from zero (00000000 in 8-bit binary) to 255 (11111111 in 8-bit binary). A group of 8 bits is known as a ‘byte’, so three bytes are needed to represent each RGB pixel of an image.

<table align="center" border="0" cellpadding="0" width="79%"><tbody><tr><td>white

</td><td>255 255 255

</td><td>11111111 11111111 11111111

</td><td></td></tr><tr><td>light grey

</td><td>192 192 192

</td><td>11000000 11000000 11000000

</td><td></td></tr><tr><td>grey

</td><td>128 128 128

</td><td>10000000 10000000 10000000

</td><td></td></tr><tr><td>dark grey

</td><td> 64 64 64

</td><td>01000000 01000000 01000000

</td><td></td></tr><tr><td>black

</td><td> 0 0 0

</td><td>00000000 00000000 00000000

</td><td></td></tr><tr><td>red

</td><td>255 0 0

</td><td>11111111 00000000 00000000

</td><td></td></tr><tr><td>pink

</td><td>255 175 175

</td><td>11111111 10101111 10101111

</td><td></td></tr><tr><td>orange

</td><td>255 200 0

</td><td>11111111 11001000 00000000

</td><td></td></tr><tr><td>yellow

</td><td>255 255 0

</td><td>11111111 11111111 00000000

</td><td></td></tr><tr><td>green

</td><td> 0 255 0

</td><td>00000000 11111111 00000000

</td><td></td></tr><tr><td>magenta

</td><td>255 0 255

</td><td>11111111 00000000 11111111

</td><td></td></tr><tr><td>cyan

</td><td> 0 255 255

</td><td>00000000 11111111 11111111

</td><td></td></tr><tr><td>blue

</td><td> 0 0 255

</td><td>00000000 00000000 11111111

</td><td></td></tr></tbody></table>

<div></div>Since all kinds of digital information are represented in binary form, there are also binary codes for representing textual symbols with which to construct messages. One of the simplest of these is known as ASCII, which includes all the symbols available on a western keyboard. The ASCII Code Table provides the following examples of binary representations for four upper-case letters:

H = 01001000

E = 01000101

L = 01001100

P = 01010000

When embedding the ASCII message “HELP” (32 bits) into a digital image to create a ‘steganogram’ it is desirable to alter the appearance of the image itself as little as possible in order to avoid arousing any suspicions that a covert channel is being employed. One way to achieve this is simply to substitute one bit of the message for one specific bit of each RGB pixel component in the cover image. To produce the least change in the image we could replace the least significant bit (LSB), *i.e.,* the bit of lowest value, in each RGB pixel component. This technique is known as LSB steganography and since the LSB of each RGB component is only altered about 50% of the time on average the visual effect on the colour of the pixel is virtually undetectable by the human eye. There are however some clever statistical techniques that can be employed to test whether or not an image is likely to be a steganogram – this is known as steganalysis – but they cannot in general recover the message if present.

The Table below gives a simple example of LSB-embedding the message “HELP” into a cover image. The file containing the steganogram can then be sent as an email attachment, without arousing suspicions that a covert channel is in use, provided that the email and the stegogram itself appear visually natural and appropriate to the particular context in which they are deployed.

As a simple example, suppose the cover image is a holiday photo of a scene that includes an intense blue, cloudless, Mediterranean sky at the top. From the Table above we can see that each sky pixel should have RGB values such as (0 0 255), or (00000000 00000000 11111111) in binary. To embed the 32-bit message “HELP” above into the sky portion of the scene requires 11 pixels, *i.e.*,33 RGB components, and the embedded portion of the image, one pixel per line, can be represented as:

00000000 0000000**1** 11111110

00000000 0000000**1** 11111110

00000000 00000000 11111110

0000000**1** 00000000 11111110

00000000 0000000**1** 11111110

0000000**1** 00000000 1111111**1**

00000000 00000000 1111111**1**

0000000**1** 00000000 11111110

00000000 0000000**1** 11111110

0000000**1** 00000000 11111110

00000000 00000000 11111111

where the **bold** bits are the 32 message bits. These minor changes to the values of the sky pixels will leave the sky portion of the image looking visually unchanged, any slight variations in colour perhaps giving the impression of slight heat distortion or camera shake (compare the two images below). The intended recipient of the steganogram merely has to view the values of the individual pixel components in binary form, note down the LSB of each byte, reassemble these bits into octuplets, and then use the ASCII code table to look up the corresponding textual symbols.

Particular exfiltration applications of image steganology include the smuggling human rights reports out of countries controlled by highly authoritarian regimes such as North Korea, and also the leaking of financially, commercially or militarily confidential information by an employee within an organisation to outsiders. In May 2011 a suspected al-Qaeda member was arrested in Berlin and found steganographically concealed within the frames of a pornographic video on a memory card in his possession were 141 text documents detailing al-Qaeda’s operations and plans.

However, image steganology also has the potential to covertly infiltrate malicious software into organisations, in order to subvert their day-to-day operations. In August 2011 ‘Operation Shady RAT’ was reported in which stego-masked commands ordered infiltrated computers to connect to a command-and-control (C&amp;C) server for subsequent exfiltration.

Image steganology is thus a technique that is of great interest to those engaged not only in cyber-crime and cyber-espionage, but also possibly in cyber-sabotage.

<span>![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/original_cover_image_jpeg.preview.jpg)</span>

*<span>Original cover image (JPEG)</span>*

<span>![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/embedded_steganogram.preview.jpg)</span>

*<span>Embedded sterograph</span>*
