# What makes a good commit?
***

This depends on how you intend to use your repository and Git in general; [there is no single right answer to this question](http://chimera.labs.oreilly.com/books/1230000000561/ch03.html#_what_makes_a_good_commit).  Some people "[use the convention that every commit is buildable](http://chimera.labs.oreilly.com/books/1230000000561/ch03.html#_what_makes_a_good_commit)"--in which commits will generally be larger since they must contain everything required to advance the code from one coherent stage to another.  While others structure commits to take advantage of Git's ability to transmit and reuse them, containing only the changes necessary to do what the commit message says.   This approach likely means that one can use git revert to undo a change, and allows for merging one's branch into other branches to incorporate a new feature.

Consider how good commits can help you:

- They speed up the reviewing process.
- They make using and collaborating with Git a lot easier.

Consider these [tips](http://dev.solita.fi/2013/07/04/whats-in-a-good-commit.html):

- Only make one change per commit
- Make the whole change in one commit
- Document what you have changed
- Document why you made the change
- Never commit code that's been commented out

Structure your commit message like this (from [Git: 5.2 Distributed Git - Contributing to a Project](http://git-scm.com/book/ch5-2.html)):

```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary.  Wrap it to about 72 characters or so.  In some contexts, the first line is treated as the subject of an email and the rest of the text as the body.  The blank line separating the summary from the body is critical (unless you omit the body entirely); tools like rebase can get confused if you run the two together.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded by a single space, with blank lines in between, but conventions vary here
```

### DO
- Write the summary line and description of what you have done in the imperative mode, that is as if you were commanding someone. Write "fix", "add", "change" instead of "fixed", "added", "changed".


### DON'T
- Don't end the summary line with a period - it's a title and titles don't end with a period.


***



#### Resources

- [Writing Good Commit Messages](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)
- [Git: 5.2 Distributed Git - Contributing to a Project](http://git-scm.com/book/ch5-2.html)
- [A Note about Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- [Making Commits](http://chimera.labs.oreilly.com/books/1230000000561/ch03.html#commit-messages)
- [A Better Git Commit](http://web-design-weekly.com/2013/09/01/a-better-git-commit/)
- [Git Reference: Commit](http://gitref.org/basic/#commit)
- [What's in a Good Commit](http://dev.solita.fi/2013/07/04/whats-in-a-good-commit.html)