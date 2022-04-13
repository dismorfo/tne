---
title: "StoryMarker"
nid: 213
type: pieces
date: 2012-05-14T15:45:26+00:00
display_date: Monday, May 14, 2012
part_of: http://192.168.0.5:8080/tne/api/v1/spoke/213/partof
comments: http://192.168.0.5:8080/tne/api/v1/spoke/213/comments
contributors: http://192.168.0.5:8080/tne/api/v1/spoke/213/contributors
draft: false
---

 Place and stories have had an intimate kinship since narrative forms first emerged. As Nick Kaye writes in the introduction to his book *Site-Specific Art: Performance, Place and Documentation*, “If one accepts the proposition that the meanings of utterances, actions and events are affected by their ‘local position’, by the *situation* of which they are a part, then a work of art, too, will be defined in relation to its place and position” (1). This resonates true for oral narratives’ place-based nature (and association with the space of the community of listeners), the “durable” narratives carved into stone to chronicle the meaning of a site, and more ephemeral forms that utilize an alternative storytelling platforms like graffiti. In each example of an emerging storytelling platform, the indelible relationship between a story and its space is significant.

 For me, the use of mobile media for storytelling seemed especially effective for capturing and experiencing this intimate relationship between narrative and place. These media are location aware, they can easily capture audio and text, and are currently the most pervasive computing form worldwide. Unlike prior media for storytelling, mobile and locative media can layer an almost innumerable number of stories onto a single site.

 Yet, as I started to explore the options for storytelling with mobile devices in 2009 and 2010, there weren’t any tools or applications that were able to accomplish what I had hoped to do with my students. I wanted my students to create site-specific fictional stories, walking tours, histories, or games. The available options included getting my students to find ways to creatively mis-use existing mobile media tools and apps like [geocaching](http://www.geocaching.com/) (placing printed out stories in geocache containers), [Yellow Arrow](http://yellowarrow.net) or QR code stickers that would unlock text messages or websites, or even using [Foursquare](http://foursquare.com/) by adding narrative elements in the “Tips” section of a location. None of these options seemed ideal and, in collaboration with a Computer Science undergraduate, Chris Simmons, I decided to build my own storytelling app called StoryMarker.

[![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/storymarker_figure-1b.preview.jpg)](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/storymarker_figure-1b.jpg)
<span class="caption">**Figure 1:** Mockup of the home screen for the StoryMarker app, designed in January 2010 by Jason Farman. These mockups were transformed into the live app that ran on a few iPhones in early 2010.</span>

 The primary functionality for this app would be to record an audio story and attach it to a place by geotagging its coordinates (inspired by similar projects like Blast Theory’s [*Rider Spoke*](http://www.blasttheory.co.uk/bt/work_rider_spoke.html) and the Toronto-based [*\[murmur\]*](http://murmurtoronto.ca/) project). As users of StoryMarker wandered past a location where a story was recorded, the app would alert them that a story was available in their vicinity. All stories would be audio-only in the first launch of the app and all stories would be available only if the listeners were standing in the spot where the story was recorded.

[![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/storymarker_figure-3.preview.jpg)](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/storymarker_figure-3.jpg)
<span class="caption">**Figure 2**: Mockup of the list view of the StoryMarker app, showing which stories were nearby to the user.</span>

 The motivation for these two limitations were debated quite a bit with the student I was working with and a faculty member in the Department of Art, [Doug Gast](http://www.noprogram.org/), who consulted with us on the project. From my perspective, the use of audio created an interesting relationship with the medium of the phone as a storytelling device: the app would utilize oral storytelling, which historically required proximity and synchronicity in order to be successful. Listeners to an oral narrative had to be in the same location at the same time. While we maintained the importance of mutual location, by dislocating the need for synchronous engagement, listeners build a deep sense of community and spatial relationships across asynchronous time.

 This design choice complemented the continuing trend of using mobile phones for asynchronous connection between people through texting and email communication. This trend hit its nexus in 2009, as we began working through the planning stages for the project, when cellphones worldwide were used more for data transfer than for realtime voice communication (Wortham). Asynchronicity had become the dominant form of engagement and we wanted to explore some of the ways that this form of interaction can develop a deep sense of community and connection to a particular place.

 In conjunction with this choice was the decision to “lock” all of the stories unless the participant was standing within proximity to the coordinates of the story. Part of this was an issue of motivation (i.e., how do we actually get people to walk to the place that this story is about?). By turning it into a game-like exploration of the stories of a place — like geocaching for narratives — we hoped that the need to hunt down the coordinates of a story would serve to motivate people to locate the place where the story was recorded. This was inspired by my own love of geocaching and the way that locative games can thoroughly transform the sense and purpose of a place.

[![](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/storymarker_figure-2.preview.jpg)](/tne/sites/mediacommons.futureofthebook.org.tne/files/images/storymarker_figure-2.jpg)
<span class="caption">**Figure 3**: Mockup of the map interface for the StoryMarker app. Pressing on a marker icon would open up a title and description of the story recorded in that location. Moving within proximity to the story would unlock the story for listeners.</span>

 While the motivating factors were very important in this decision to lock the stories unless a person was at the location, the larger reason for doing so was that, ultimately, we believed that the story would be incomplete without the environment as the setting of for the story. For me, the driving question was, “What does site-specificity bring to the narrative experience?”

 The answers to that question continue to be far more complex than I had anticipated. Initially, I had conceived of the relationship between the stories and the spaces as one of context and narrative backdrop. The stories would play off of a site’s context (e.g., in my students’ projects they used sites such as the university, a graveyard, and a nuclear reactor once associated with the Manhattan Project) and also utilize it as a backdrop, much in the same way a performance might utilize scene design to enact a sense of realism.

 Yet, this answer simplifies the process of narrative, context, and site-specificity. My understanding of the relationship between these terms continues to fluctuate as my definition of them develops. While I have attempted to address the relationship between these categories in a more thorough way in my book, [*Mobile Interface Theory*](http://www.mobileinterfacetheory.com), I am aware that the interdependent nature of narrative, context, and site-specificity is rooted in a long genealogy that I am only beginning to trace.

 As we considered these relational aspects of site-specific narrative for our app, it was also clear that these aspects were not only developed between the stories of the space and the media to tell those stories, but also the increasing significance we give the stories told by those in our networks. Thus, we realized that we needed to include a social component to the app. People would want to be able to filter the stories in a site based on those left by people in their network.

 Unfortunately, the StoryMarker app was never submitted to the Apple Store, in large part due to my relocation from Washington State to Maryland and Chris Simmons’ move to Japan. However, I still believe that the ideas driving the app are important in defining a significant, emerging way that our mobile devices are being used. Over the last couple of years since we designed StoryMarker, several apps have emerged with similar goals such as [Broadcastr](http://broadcastr.com), [7scenes](http://7scenes.com/), and [InsydeStory](http://www.insydestory.com/).

 As I continue to think about this application and how it might develop and eventually launch, one thing that strikes me when I see my students’ explorations with similar apps is what I’m currently terming the “poverty of the screen” for these narratives. The most compelling site-specific mobile narratives are those that get readers to interact with material objects in a meaningful way. The entirety of the story doesn’t live strictly on the screen. Instead, the most dynamic mobile media narratives find a way to get readers to interact across the space of the screen with their immediate environment in a meaningful way. While this materiality can be enacted strictly through a digital device (a very material interface in numerous ways), this materiality needs to be compellingly highlighted in order to find a way for the narrative to move seamlessly across digital and physical spaces. This is one aspect that I continue to work through as I envision future forms that StoryMarker will take.

**Works Cited**

 Kaye, Nick. *Site-Specific Art: Performance, Place and Documentation*. New York: Routledge, 2000. Print.

 Wortham, Jenna. “Cellphones Now Used More for Data than for Calls.” *New York Times* 13 May 2010. Web. 7 Jan. 2012. <http://www.nytimes.com/2010/05/14/technology/personaltech/14talk.html>
