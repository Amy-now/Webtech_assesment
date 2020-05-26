# webtech assessment

## introduction

## 1.1.1 Background

As a computing student I am aware of the vast competition in industry to obtain a good job. At present I do not have an online presence that highlights who I am and my credentials that relate to employment and what I would be able to offer their organisation. Therefore, I used this assignment to create a portfolio website that I will be able to direct any future employers to. In todays world of immense competition an online presence is vital and will hopefully support me in my future applications. 
From a personal perspective the portfolio is a tool for me to be able to log my experiences and progress and will be useful to consult as I update my CV or attend interviews in the future.


## 1.1.2 Wire Frames

The first thing I did when starting this assignment was making a wireframe for my website. Wireframes are used to help illustrate a webpages interface and how it would be laid out. It is much easier to write code for an idea when you have a rough structure to how you want your website to be. 
I did my wire frame in Adobe XD, the program has pre-set art boards which you can design your wire frame on. These art boards consisted of a web page and a mobile sized one. I had used this program before and so had experience with it. This made is reasonably easy for me to set up my page.

## 1.1.3 Colour Choices

Before this assignment I had not really considered colour other than my personal preference, however I started to read articles about the psychology of colour and colour in business and realised that colour could play an important role in how my portfolio website will be viewed by others.
Subconsciously colour has a powerful impact on us it is a strong form of nonverbal communication. Understanding the importance of this meant that I looked more at which colours work well in business and recognised that colour can be invaluable to obtain the best responses to marketing and promotional efforts, which is effectively what I am hoping to achieve with my portfolio.
Blue is a colour that promotes trust and reliability, it is often used for businesses such as banks and financial companies as it is seen as the colour of stability.
Blue is considered to be serene, mentally calming and the colour of clear communication and I am hoping that my portfolio will provide that clear communication about myself and my experiences. 
I realised though that using a solid colour on its own can become overpowering so I used a gradient of colour across the web page. I was able to use CSS to achieve this with good effect.

## 1.1.4 Accessibility

When websites are badly designed, they can create barriers that exclude people from using them, it was therefore important that I considered the accessibility standards to ensure that my portfolio would be as accessible as possible thus avoiding limitations of its audience.
In order to do this, I made the page responsive by using media queries in CSS, this means that the website will be responsive on different sized view ports. Where pictures have been used on the page, text for images is enabled so that if the pictures do not display or a person is unable to see them text will show instead.
The site allows for navigation using the mouse or the arrow keys. The contact me form can be completed using the tab key which gives accessibility to people who cannot use a mouse.


## 1.2.5 GDPR

GDPR (General Data Protection Regulation) is designed to give people more control over how organisations and individuals use their information. It overlaps with the PECR (Privacy and Electronic Communications Regulations which cover the use of cookies and electronic marketing communication. 
The portfolio website gives people the opportunity to contact me and leave their details to enable me to reply to them, due to this I have a responsibility to ensure that I am GDPR compliant.
Therefore, a privacy policy needed to be incorporated addressing the rights as stated by the Information commissioner’s office.  
I considered the information that I have asked people to provide to ensure that it is the minimum amount for what is needed and that I will not be storing excess information about people. The policy also explains how the information provided will be used by me. It gives the users information about how they can access to find out what information is held. There is the opportunity for individuals to have their information rectified at a later time. There is the option to have information deleted or to not include personal information although it is also made clear that this may affect the process of the website. As if a user declined to enter their information, I would not be able to contact them. As the website is to essentially promote myself the data provided would not be passed on in any way, the privacy policy makes it clear that data will not be passed on without permission. The policy gives guidance on what to do if the user has an objection to the way their data is collected or used. The policy is clear and makes the collection and use of data transparent. The consent statement has clickable links to the privacy policy to ensure that it is easily accessible for users.


## 1.2.6 Distance Selling

As I chose to create a portfolio website there were no measure to address.

## 1.2.7 Evaluation

When planning the design for my website I wanted to make sure it was clear and uncluttered but still managed to show my personality. The robots were one of the last additions to my website and I really think they help not only show off some good skills in Javascript but I also think it helps show a bit of my personality and makes the website look more interactive without cluttering it up. I think having set block of colour eg for the about section and the contact form instead of having colour all over the page helps spilt up my page into 4 different sections making it easier for a user to navigate through. 
I think I have successfully made a working portfolio that displays some of the experiences I have had in my life. If I had more time, I feel like I could have added more information and detailed descriptions into my website making it even more informative to potential employers. I think it clearly displays me what I am about and sells me in a good light which what I think a portfolio should do.
The biggest problem I found was making my website responsive. I started my design on a desktop and then proceeded to try and make it responsive for smaller screens. Looking back this was a mistake as its much harder to make all the components of a website fit a smaller screen then it is to fit a bigger screen. The section I found most difficult to make responsive was the “about me” section. I found floating columns very hard to organise and hard to stack on top of one another when the viewport started to get smaller.
I originally built my website on a desktop which when in inspect mode has the dimensions of 1577 x 850. I managed to make it completely responsive for all widths but with the set height of 850. I then tried it on a smaller desktop which had a dimension of 910 x 450. This caused me many issues as though the width was fine the height was severely impacting my responsive design. I realised that this was because I had used px in my CSS which is a “absolute length”. This means that this is a set length and therefore wasn’t changing when the width of my page changed (which I accounted for) but it also wasn’t changing when the height of my page changed. To combat this, I went through and changed most of my lengths to relative lengths which allow them to work more effectively to be responsive.
