[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification for commit messages, that aims to make documented changes more readable through a set of rules, providing not only a more organized changes history but also facilitating the implementation of things like automation.

## Usage

To use these conventions you can simply start applying them on your commit messages.

This is how the structure of your commit messages should look like

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

>[!TIP]
>We highly recommend that you enforce the usage of these conventions across your project using [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) and tools like [husky](https://typicode.github.io/husky/), especially for projects with lots of people involved. A small tutorial on how to do it [here](#).

## Types

Most common types
- `fix:` => for changes that solve bugs or errors in general, usually linked to 'Bug' Issues
- `feat` => for changes that implement new features, usually linked to 'Feature Request' Issues

Less common but still allowed types
- `build:`
- `chore:`
- `ci:`
- `docs:`
- `style:`
- `refactor:`
- `perf:`
- `test`

#### Example of commit message with applied conventions
```
fix: solved error when clicking on 'home' button (#9)
```
>[!NOTE]
>When committing fixes linked to a github Issue and/or Pull request, it is recommended to link the issue somewhere in the commit, check [Linking a pr to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) for more info

## Scopes

An optional `scope` may be provided next to `type`, in this context a `scope` refers to the piece of code that is affected by the changes.

#### Example of commit message with scope included
```bash
feat(navbar): add dynamic animations
```

## Our Implementation
This is the final structure we defined for this project using these conventions

#### When changes can be described in a single sentence
```
<type>[scope]: <description>

<github keyword> #8 // -> references the related issue
```

#### When multiple lines are required to properly describe the changes
```
<type>[scope]: 

    - <line 1>
    - <line 2>
    - ...

<github keyword> <issue number> // -> references the related issue
```

#### Example
```
feat: tested git hooks with husky and 'conventional commit' conventions
    
    - added docs with examples

fixes: #8
```