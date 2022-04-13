---
title: "Circuit Board Prototype for an Electronic Reading Device"
nid: 211
type: pieces
date: 2012-05-14T05:42:29+00:00
display_date: Monday, May 14, 2012
part_of: http://192.168.0.5:8080/tne/api/v1/spoke/211/partof
comments: http://192.168.0.5:8080/tne/api/v1/spoke/211/comments
contributors: http://192.168.0.5:8080/tne/api/v1/spoke/211/contributors
draft: false
---

 Although electronic devices increasingly pervade our daily activities, the process from which these devices are conceived, refined, and finally produced is largely opaque, even if one peers behind the casing of the device and views the electronic components within. The intermediate stage artifact I am submitting is a photograph of a printed circuit board (PCB) (**Figure 1**). This particular PCB was used to prototype a novel electronic reading device created for my research about how such devices would fit into the reading activities of academics and knowledge workers. The completed reading device is a thin slate (**Figure 2**), similar in appearance to an Amazon Kindle DX or Apple iPad, with an E-Ink electronic paper display (like that found on the black and white Kindles). My goal with this artifact is to show that the process of creating electronics hardware probably has more in common with the other projects featured in the middle state collection than one might initially think. Multiple iterative cycles during which ideas are tested, problems get fixed, and designs get refined all factor prominently into the creation of electronic hardware. Of course, the unique perspective I hope to contribute is how these iterations are achieved when it comes to electronics hardware.

[![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/proto_pcb.preview.jpg)](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/proto_pcb.jpg)
**Figure 1: The PCB used to prototype the e-reading device**

[![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/chen_ebook_devices.preview.jpg)](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/chen_ebook_devices.jpg)
**Figure 2: Working prototypes of the reading slates**

 As with any large project, an essential technique for maintaining one’s sanity is to break the task into smaller, more manageable pieces. For electronics and software, it is much faster to diagnose and fix problems when the system is restricted in complexity. The PCB seen here is one such mini-prototype that allowed me to test a design for the graphics system of the reading device in isolation.

 The main purpose of the circuit board was to make sure my design for conveying signals from a microprocessor to the electronic paper display was valid. As one of the most basic requirements for a reading device is the ability to show text and images on the electronic screen, this portion of the project was the critical point where a tangled mass of integrated circuits and other electronic components would first start to resemble a reading device.

 Rather than get into the technical details about how the PCB works, it is far more interesting to talk about what happens when things do not work. Like most endeavors, the first run of a hardware prototype is far from perfect. Problems include wires that are connected to the wrong chip, bad math, incorrect assumptions about the electrical behavior of a circuit and, most frustrating, problematic interactions between components that only occur in a specific design. Thus begins the process of fixing the design to make it right.

 The main challenge associated with revising a circuit design is that it ultimately means that the circuit board itself needs to change. For reasons of time and money (mostly time, as getting a new circuit board made and shipped out takes half a week at the quickest, not to mention the time needed to solder the different components onto the board), various techniques have developed to iterate one's design while minimizing the need to have new boards created. The photo of my PCB illustrates two of these techniques: "green-wiring" and banks of unpopulated components.

 Green-wiring is the electronics equivalent of the editor's red pen. The term arises from the fact that historically these wires were green to help the wires blend in with the board, as back then, the costs of re-fabricating a PCB were prohibitive. When a part of the circuit does not work as planned, one can correct it by cutting away the wires printed on the board and then routing around the mistake using additional wires. Examples of green-wiring on the board include the thin blue wires to stabilize the power going to the display (see [enlargement](http://mediacommons.futureofthebook.org/tne/sites/mediacommons.futureofthebook.org.tne/files/images/proto_pcb.jpg)). A more visible use of this technique are the black and red wires that were used to add a comically-large power jack to the board after I discovered I had neglected to provide the screen with the correct voltage and needed to obtain it from an external AC adapter. The art of green-wiring involves identifying the best locations to cut existing lines (generally where they are thinnest and furthest way from other wires to minimize any collateral damage), and finding locations where it is feasible to attach the new wire (generally somewhere with a large enough piece of exposed metal to which the wire can be soldered – metallic contacts of board components are popular locations as seen in the photo).

 The other technique visible on the board is the inclusion of alternative, backup circuit designs, which are left unpopulated with components. The careful eye will notice that there are spaces on the upper right corner of the board (by the labels R3, R4, U$10 and U$11) for electronics components that are not present. Since the cost of a circuit board does not change based on how many wires and spaces for components are printed on it, using empty space on a board for alternative versions of a circuit allows designers to hedge their designs. If one is unsure about a design, many different candidates can be placed on one board. Should the first design not work, components can be placed into the alternative circuit to see if it performs better. For this board, I had two designs for the circuit that would power up the display and also reset it due to fact that the procedures provided in the display manufacturer's specifications were somewhat ambiguous about this topic.

 Once the problems had been identified and the changes applied to this board, the digital schematic of the board was updated to incorporate the corrections, much like how editing marks on paper might be transferred into a master word processor document. Additional functionality to test was added, a new board was created, and the process began anew.

 I end with a complementary photo (**Figure 3**), which is a camera phone photo I took in 2008, when the necessary adjustments and corrections described above had been made. This photo depicts the processor successfully showing an image on the display using the prototype board.

[![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/photo_2.preview.jpg)](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/photo_2.jpg)
**Figure 3: Successful display of an image after rewiring**
