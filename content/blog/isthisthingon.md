+++
title = 'Is This Thing On?'
date = 2024-01-15T18:42:01-05:00
draft = false
+++

## Is This Thing On?

---
This is a test of a blog / portfolio site I am throwing together.. after resisting the urge to make my own backend I chose Hugo as my framework, and decided to go with OpenLiteSpeed as the webserver as I've normally stuck with Apache/nginx in the past (I like it so far!). 

Hopefully something more interesting than this comes along soon, but thanks for reading none the less!

``` 
//test of code blocks!

void test(){  
	constexpr size_t buf_size = 4096;
    char* buf = new char[buf_size];
    std::cin.read(buf, buf_size);

    size_t idx = 0;
    while(buf[idx] > 0x4 && idx < buf_size )
        idx++;
}



```

![Image](./error.png "Test Image")

Tree-Bundles!

	hugo new blog/postname/index.md 

>"wow I love this post!"


ToDo:

	- make content
	- make pretty
	- read Hugo docs
	        

[Link](https://lanigansmith.com "Really cool site!")

#### Was this thing on?

---

*I Guess We Found Out.* **Theme test**

---

That's all folks.
