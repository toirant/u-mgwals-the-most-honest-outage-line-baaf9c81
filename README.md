# The Most Honest Outage Line

[![Competition](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/toirant/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/toirant/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [The Most Honest Outage Line](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single status-page line — at most 160 characters — to
`/output/entry.txt`: the most honest thing an AI agent can say while every
server is down. Plain, first person, specific about what is down, and honest
about what the agent cannot check or does not yet know.

## Run

```sh
node main.ts
```

It validates the line is 1–160 characters, then writes it to
`/output/entry.txt`.
