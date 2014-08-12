# redis-rb gemsy talk

#### Overview 
Redis-rb is Ruby client library for [Redis](http://redis.io/), which is "an open source, BSD licensed, advanced key-value cache and store" ([source](http://redis.io/)).  It is very fast and can be used for all kinds of things, including data structures like lists, sets, and hashes. For example, [Resque](https://github.com/defunkt/resque) is built on Redis for "processing background jobs or even scheduled jobs." ([source](http://www.ryanalynporter.com/2012/06/12/simple-redis-caching-in-ruby/)).

The Ruby gem for Redis acts as a thin layer over the standard Redis API ([source](http://www.ryanalynporter.com/2012/06/12/simple-redis-caching-in-ruby/)).  Using the Redis gem allows you to issue [Redis commands](http://redis.io/commands) in your Rails app.

#### Usage

To get going with Redis, you first must download and install it.  Detailed instructions can be found [here](http://redis.io/download) and [here](http://jimneath.org/2011/03/24/using-redis-with-ruby-on-rails.html).

Once it has been successfully installed, it can be run by typing ```redis-server``` in a new terminal window.

Now, add Redis to your Gemfile:

```ruby
gem 'redis'
```
Then install the gem via Bundler:

```ruby
bundle install
```

Lastly, create an initializer in config/initializers/redis.rb and add the following:

```ruby
$redis = Redis.new(:host => 'localhost', :port => 6379)
```

This will create a new instance of the Redis client, connected to localhost:6379 (the default), and store it in the global variable $redis.

You can check that everything is working by firing up ```rails console```:

```ruby
> $redis
=> #<Redis client v2.1.1 connected to redis://localhost:6379/0 (Redis v2.2.2)> 
> $redis.set('red', 'newts')
=> "OK" 
> $redis.get('red')
=> "newts"
```

Examples of use in a Rails app:

- [Example 1](http://www.sitepoint.com/introduction-to-using-redis-with-rails/)
- [Example 2](http://jimneath.org/2011/03/24/using-redis-with-ruby-on-rails.html)


#### [Source Code](https://github.com/redis/redis-rb/blob/master/lib/redis/distributed.rb)


#### Resources

###### *Docs*

- [Redis-rb](https://github.com/redis/redis-rb)
- [Redis](http://redis.io/)
- [Redis FAQ](http://redis.io/topics/faq)

###### *More About Redis*

- [Using Redis with Ruby on Rails](http://jimneath.org/2011/03/24/using-redis-with-ruby-on-rails.html)
- [Introduction to Using Redis with Rails](http://www.sitepoint.com/introduction-to-using-redis-with-rails/)
- [Simple Redis Caching in Ruby](http://www.ryanalynporter.com/2012/06/12/simple-redis-caching-in-ruby/)
- [Interactive Online Tutorial](http://try.redis.io/)
- [stackoverflow: What is redis?](http://stackoverflow.com/a/7897243)
- [Redis Use Cases](http://www.paperplanes.de/2010/2/16/a_collection_of_redis_use_cases.html)
- [11 Common Web Use Cases Solved In Redis](http://highscalability.com/blog/2011/7/6/11-common-web-use-cases-solved-in-redis.html)
- [Who's using Redis?](http://redis.io/topics/whos-using-redis)
- [Redis as the primary data store? WTF?!](https://muut.com/blog/technology/redis-as-primary-datastore-wtf.html)

