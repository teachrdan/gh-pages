---
title: blog comment system replace disqus
date: "2017-04-25T14:30:00"
layout: post
path: "/blog-comments-system-replace-disqus/"
tags:
	- comment
---

*inspirated by [Replacing Disqus with Github Comments](http://donw.io/post/github-comments/)*

Recently used [Gatsby](https://github.com/gatsbyjs/gatsby) to build blogs and DISQUS as comments system, I really do not like the disqus'appearance.
  
### Disqus shortage

+ layout & style

    Althought disqus said they have below feature
	
    >[Look good](https://disqus.com/features/)
	
    >Automatically adapts to your site's design and colors or you can set it to your own liking.
	
    **actual effect below**
	
    ![disqus look](https://ooo.0o0.ooo/2017/04/29/59045707c61bd.png)

    layout and style being closed to blog's theme but they are not easily to customize, sometimes are unexpected.
		
    Maybe layout can be customized by [Disqus api](https://disqus.com/api/docs/), but it's too complicated to modify style.
	
+ bottom logo
	
    Because of using basic version, the disqus comments component has the disqus' logo, which may break your entire theme layout and style, it's look like disguasting.
					
+ tracking

    this article([Replacing Disqus with Github Comments](http://donw.io/post/github-comments/)) said that disqus may load many websits which you don not realize that they have been loaded. it's also disguasting.
		
+ social system
			
    Blog comments are all related to demo or source codes which are all on github. it is additional and unnecessery step to login in disqus to manage blog comments.
		
    Since you can use github pages static blog,  **maybe you can use github issue as blogs comments**.
		
### Disqus Vs. Github issues

Comparing disqus with github issues
	
+ functions

     ------ | DISQUS | GITHUB ISSUE
     ------ | ------ | ------------
     proifile | yes | yes
     Email notifications | yes | yes
     Web notifications | yes | yes
     Authorization | yes | yes
     [Moderation](https://disqus.com/home/settings/moderation/) | yes | yes
     [Milestones](https://guides.github.com/features/issues/#filtering) | no | yes
     [Labels](https://guides.github.com/features/issues/#filtering) | no | yes
     [Assigness](https://guides.github.com/features/issues/#filtering) | no | yes
     @mentions | yes | yes
     [References](https://guides.github.com/features/issues/#notifications) | no | yes
     [Search](https://guides.github.com/features/issues/#search) | no | yes
     Dashboard | yes | yes
     Pulse | no | yes
     share shortcut | yes | no
     [GFM](https://guides.github.com/features/mastering-markdown/) | no | yes

	
+ style & layout

    Disqus has complete sets of components and styles， github issues need to build their own comments components according to the api, you can also find a third party has been achieved.
	
+ social system
		
    ***Compared to manage comments on disqus, it may be better choice to use github issues as blog comments.***
	
    >Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.

### Choosing github issuse for blog comments
	
it may be a nice idea to have try. because github issues are basically available achieved the functions which Disqus have and naturally supporting GFM. By selecting github issues as the comments system, you can combine ideas with implementation through demo, source codes, blog, issues on the github platform. Through github.io to specifically introduce project, demo, expression of ideas and ideas as blog, through repo to show source codes, through the issues to follow up your project to discuss your ideas as blog comments, record all the activities of idea in github.

### How to establish github comments in blogs

There are two main ways to implement a blog comment system using the [github api](https://developer.github.com/v3/).
		
  1. in *[Replacing Disqus with Github Comments](http://donw.io/post/github-comments/)*, first set a related issue, and then in the blog page you can see the relevant comments, and then jump to the corresponding github issues page to comment.
	
  2. in *[Gitment](https://imsun.net/posts/gitment-introduction/)* Do not leaving the blog pages to comments by OAuth.

		
   I have to open a new page to writte a comments in first method. But there are security problems in second method.
	
+ basic step
	
    below are the basic steps for using the github issues as a blog comment system without having to redirect.
		
    + step 1

        Get OAuth and Token
		
	    firstly [register](https://github.com/settings/applications/new) in [Web Application Flow](https://developer.github.com/v3/oauth/#web-application-flow):
			
	    > Redirect users to request GitHub access

	    > GitHub redirects back to your site

	    > Use the access token to access the API
			
	+ step2
			
	    Create the appropriate issue under the corresponding repo
			
	    > [Create an issue](https://developer.github.com/v3/issues/#create-an-issue)
		
	+ step3

	    Show comments and create comments under the corresponding issue
			
	    > [List comments on an issue](https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue)

	    > [Create a comment](https://developer.github.com/v3/issues/comments/#create-a-comment)
		
	   This is the basic operation, if you want to specific operation, please refer to [Github API](https://developer.github.com/)

### Summary

it dot not have technology difficulty. But there are some more interesting things to do for using github issues as blog comments in the static website environment.			
		
			
	
	


