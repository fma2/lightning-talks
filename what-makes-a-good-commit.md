Good commit messages serve at least three important purposes:

- To speed up the reviewing process.

- To help us write a good release note.

- To help the future maintainers of Erlang/OTP (it could be you!), say five years into the future, to find out why a particular change was made to the code or why a specific feature was added.

Structure your commit message like this:

From: http://git-scm.com/book/ch5-2.html


Before you start looking at the specific use cases, here’s a quick note about commit messages. Having a good guideline for creating commits and sticking to it makes working with Git and collaborating with others a lot easier.(http://git-scm.com/book/ch5-2.html)


First, you don’t want to submit any whitespace errors. G

Next, try to make each commit a logically separate changeset. If you can, try to make your changes digestible — don’t code for a whole weekend on five different issues and then submit them all as one massive commit on Monday. Even if you don’t commit during the weekend, use the staging area on Monday to split your work into at least one commit per issue, with a useful message per commit. 

The Git project requires that the more detailed explanation include your motivation for the change and contrast its implementation with previous behavior — this is a good guideline to follow. It’s also a good idea to use the imperative present tense in these messages. In other words, use commands. Instead of "I added tests for" or "Adding tests for," use "Add tests for." Here is a template originally written by Tim Pope at tpope.net:

```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded by a
   single space, with blank lines in between, but conventions vary here
```

If you don’t, Git will start a text editor to allow you to enter your message; “Text Editor” describes how the editor is chosen. Although the text is free-form, the usual practice is to make the first line no longer than 50–60 characters or so. If you need further lines, then separate them from the first one with a blank line, and wrap the remaining paragraphs to 72 characters. The first line should serve as a subject line for the commit, as with an email. The intention is to allow listings that include the commit message to usefully abbreviate the message with its first line, still leaving space for some other information on the line (e.g., git log --oneline).(http://chimera.labs.oreilly.com/books/1230000000561/ch03.html#_making_a_commit)

This depends on how you intend to use your repository and Git in general; there’s no single right answer to this question. Some people use the convention (if the content is software) that every commit must be buildable, which means that commits will generally be larger since they must contain everything required to advance the code from one coherent stage to another. Another approach is to structure your commits primarily to take advantage of Git’s ability to transmit and reuse them. When preparing a commit, ask yourself: does it contain entirely and only the changes necessary to do what the commit message says it does? If the commit says it implements a feature, does someone using git cherry-pick to try out the feature have a decent chance of that succeeding, or does the commit also contain unrelated changes that will complicate things? Think also about later using git revert to undo a change, or about merging this branch into other branches to incorporate the new feature. In this style, each commit might not produce functional software, since it could make sense to represent a large overall change as a series of commits in order to better reuse its parts. You can use other methods to indicate larger project checkpoints like buildable intermediate versions, including Git tags or unique strings in commit messages which you can find using git log --grep.