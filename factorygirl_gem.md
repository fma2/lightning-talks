# factorygirl gem

Setting up test data is important for writing good tests.  [Factory Girl](https://github.com/thoughtbot/factory_girl_rails) is a factory plug-in that allows you to create objects for your tests, hence the name "Factory" girl.   

By default, Rails provides [fixtures](http://guides.rubyonrails.org/testing.html#the-low-down-on-fixtures) for sample data, and factory_girl is a fixtures replacement.  Advocates for factories for tests claim, compared to fixtures, factories are less brittle, have less external dependency, and more flexibility (you don't have to provide more data than you need to have your tests work).  For more on this, see misc. resources links below.

Overall, testing without any sample data--from a factory or a fixture--might work for simple cases, but will likely not for more complex cases.

Example of test code without factory_girl/any other factories or fixtures:

```ruby
describe User do
	it "authenticate with matching username and password" do
		user = User.create!(:username => "Farheen", :password => "secret", :email => '...') 
		# ... some arguments
	end	
end

		#NOTE: to use this sample data, you will have to provide parameters 
		#even if your test/s doesn't/don't need that particular data to work.

```
See below for how to test with factory_girl.

### Configuration

Add factory_girl_rails to your Gemfile:

```ruby
gem 'factory_girl_rails'
```
Remember to run bundle install.

### Usage

Place your factory in the spec directory, name your file 'factories.rb'.  Here are examples of factories:

```ruby
FactoryGirl.define do
  factory :user do
    sequence(:email) {|n| "email#{n}@gmail.com" }
    password "password"
  end

  factory :post do
    sequence(:title) { |n| "New post#{n}" }
    content "A great post."
  end
end
```

Here is what your rspec file would look like:

```ruby
describe User do
	it "authenticate with matching username and password" do
		user = FactoryGirl.create(:user)
		
		#OR, to change 
		#user = FactoryGirl.create(:user, :username => "Farheen", :password => "secret")
		
		# ... some arguments
	end
end

```
Notice that the first argument after Factory.create is the name of the factory that you want to use and the arguments that follow are the fields you want to change 

You can also use the following in place of "FactoryGirl.create( )":

- FactoryGirl.build( ) 
- FactoryGirl.attributes_for( )
- FactoryGirl( ) => this does the same thing as Factory.create





### Docs


- [factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails)
- [factory_girl](https://github.com/thoughtbot/factory_girl)

### Misc. Resources


- [App & Test Example](https://github.com/awesomefoundation/awesomebits/blob/master/spec/factories.rb)
- [stackoverflow: RSpec + FactoryGirl and controller specs](http://stackoverflow.com/questions/20126078/rspec-factorygirl-and-controller-specs)
- [stackoverflow: How do I use factories from FactoryGirl in rails console?](http://stackoverflow.com/questions/18195851/how-do-i-use-factories-from-factorygirl-in-rails-console)
- [Slideshare - Rails Testing: Factories or Fixtures?](http://www.slideshare.net/mtoppa/2014-03-11factorygirl)
- [Getting Friendly with Fixtures](https://whatdoitest.com/getting-friendly-with-fixtures)
- [Fixtures v. Factories - Can't We All Just Get Along?](http://metabates.com/2010/08/15/fixtures-v-factories-cant-we-all-just-get-along/)
