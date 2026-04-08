"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Shield,
  GitBranch,
  Clock,
  Lock,
  Terminal,
  ExternalLink,
  Check,
  X,
  Minus,
} from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// SVG Infographics
// ---------------------------------------------------------------------------

function DelegationFlowDiagram() {
  return (
    <div className="mt-16 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="size-2.5 rounded-full bg-red-400" />
        <div className="size-2.5 rounded-full bg-yellow-400" />
        <div className="size-2.5 rounded-full bg-green-400" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          delegation-chain.svg
        </span>
      </div>
      <div className="p-6 md:p-10">
        <svg viewBox="0 0 800 220" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection lines */}
          <line x1="195" y1="110" x2="295" y2="110" className="stroke-primary/40" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="505" y1="110" x2="605" y2="110" className="stroke-primary/40" strokeWidth="2" strokeDasharray="6 4" />

          {/* Arrows */}
          <polygon points="290,105 300,110 290,115" className="fill-primary/40" />
          <polygon points="600,105 610,110 600,115" className="fill-primary/40" />

          {/* Node 1: User */}
          <rect x="20" y="60" width="170" height="100" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
          <text x="105" y="90" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="monospace">HUMAN</text>
          <text x="105" y="115" textAnchor="middle" className="fill-foreground" fontSize="14" fontWeight="600" fontFamily="monospace">alice@acme</text>
          <text x="105" y="140" textAnchor="middle" className="fill-primary" fontSize="10" fontFamily="monospace">scope: read:* write:*</text>

          {/* Node 2: Orchestrator */}
          <rect x="300" y="60" width="200" height="100" rx="12" className="fill-primary/5 stroke-primary/30" strokeWidth="1.5" />
          <text x="400" y="90" textAnchor="middle" className="fill-primary" fontSize="11" fontFamily="monospace">AGENT</text>
          <text x="400" y="115" textAnchor="middle" className="fill-foreground" fontSize="14" fontWeight="600" fontFamily="monospace">orchestrator</text>
          <text x="400" y="140" textAnchor="middle" className="fill-primary" fontSize="10" fontFamily="monospace">scope: read:* write:*</text>

          {/* Node 3: Sub-agent */}
          <rect x="610" y="60" width="170" height="100" rx="12" className="fill-primary/5 stroke-primary/30" strokeWidth="1.5" />
          <text x="695" y="90" textAnchor="middle" className="fill-primary" fontSize="11" fontFamily="monospace">SUB-AGENT</text>
          <text x="695" y="115" textAnchor="middle" className="fill-foreground" fontSize="14" fontWeight="600" fontFamily="monospace">summarizer</text>
          <text x="695" y="140" textAnchor="middle" className="fill-amber-600" fontSize="10" fontFamily="monospace">scope: read:docs</text>

          {/* Labels above arrows */}
          <text x="245" y="95" textAnchor="middle" className="fill-muted-foreground" fontSize="9" fontFamily="monospace">delegate</text>
          <text x="555" y="95" textAnchor="middle" className="fill-muted-foreground" fontSize="9" fontFamily="monospace">attenuate</text>

          {/* TTL badges */}
          <rect x="330" y="168" width="140" height="24" rx="12" className="fill-primary/10 stroke-primary/20" strokeWidth="1" />
          <text x="400" y="184" textAnchor="middle" className="fill-primary" fontSize="10" fontWeight="500" fontFamily="monospace">TTL: 15 minutes</text>

          <rect x="630" y="168" width="130" height="24" rx="12" className="fill-amber-500/10 stroke-amber-500/20" strokeWidth="1" />
          <text x="695" y="184" textAnchor="middle" className="fill-amber-600" fontSize="10" fontWeight="500" fontFamily="monospace">TTL: 5 minutes</text>
        </svg>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="size-2.5 rounded-full bg-red-400" />
        <div className="size-2.5 rounded-full bg-yellow-400" />
        <div className="size-2.5 rounded-full bg-green-400" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          architecture.svg
        </span>
      </div>
      <div className="p-6 md:p-10">
        <svg viewBox="0 0 900 380" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Row 1: ZeroID */}
          <rect x="330" y="10" width="240" height="70" rx="12" className="fill-primary/10 stroke-primary/40" strokeWidth="2" />
          <text x="450" y="40" textAnchor="middle" className="fill-primary" fontSize="18" fontWeight="700" fontFamily="monospace">ZeroID</text>
          <text x="450" y="62" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="monospace">Identity Provider</text>

          {/* Vertical line from ZeroID down to horizontal bar */}
          <line x1="450" y1="80" x2="450" y2="120" className="stroke-border" strokeWidth="1.5" strokeDasharray="4 3" />

          {/* Horizontal connector bar */}
          <line x1="150" y1="120" x2="750" y2="120" className="stroke-border" strokeWidth="1.5" />

          {/* Vertical drops to each box */}
          <line x1="150" y1="120" x2="150" y2="150" className="stroke-border" strokeWidth="1.5" />
          <line x1="450" y1="120" x2="450" y2="150" className="stroke-border" strokeWidth="1.5" />
          <line x1="750" y1="120" x2="750" y2="150" className="stroke-border" strokeWidth="1.5" />

          {/* Row 2: Three capability boxes — evenly spaced, no overlap */}
          <rect x="40" y="150" width="220" height="75" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
          <text x="150" y="180" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="600" fontFamily="monospace">Register Agent</text>
          <text x="150" y="200" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="monospace">SPIFFE URI + EC P-256</text>

          <rect x="340" y="150" width="220" height="75" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
          <text x="450" y="180" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="600" fontFamily="monospace">Issue Token</text>
          <text x="450" y="200" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="monospace">Short-lived JWT + chain</text>

          <rect x="640" y="150" width="220" height="75" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
          <text x="750" y="180" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="600" fontFamily="monospace">Verify + Enforce</text>
          <text x="750" y="200" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="monospace">Scope, chain, revocation</text>

          {/* Row 2 → Row 3 connectors */}
          <line x1="150" y1="225" x2="150" y2="280" className="stroke-primary/30" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="450" y1="225" x2="450" y2="280" className="stroke-primary/30" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="750" y1="225" x2="750" y2="280" className="stroke-primary/30" strokeWidth="1.5" strokeDasharray="4 3" />

          {/* Row 3 label */}
          <text x="450" y="268" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="monospace">DOWNSTREAM SERVICES</text>

          {/* Row 3: Downstream MCP services */}
          <rect x="40" y="280" width="220" height="50" rx="8" className="fill-primary/5 stroke-primary/20" strokeWidth="1" />
          <text x="150" y="310" textAnchor="middle" className="fill-primary" fontSize="12" fontFamily="monospace">GitHub MCP</text>

          <rect x="340" y="280" width="220" height="50" rx="8" className="fill-primary/5 stroke-primary/20" strokeWidth="1" />
          <text x="450" y="310" textAnchor="middle" className="fill-primary" fontSize="12" fontFamily="monospace">Slack MCP</text>

          <rect x="640" y="280" width="220" height="50" rx="8" className="fill-primary/5 stroke-primary/20" strokeWidth="1" />
          <text x="750" y="310" textAnchor="middle" className="fill-primary" fontSize="12" fontFamily="monospace">Database MCP</text>

          {/* Step number badges */}
          <circle cx="150" cy="148" r="10" className="fill-primary" />
          <text x="150" y="152" textAnchor="middle" className="fill-white" fontSize="9" fontWeight="600" fontFamily="monospace">1</text>

          <circle cx="450" cy="148" r="10" className="fill-primary" />
          <text x="450" y="152" textAnchor="middle" className="fill-white" fontSize="9" fontWeight="600" fontFamily="monospace">2</text>

          <circle cx="750" cy="148" r="10" className="fill-primary" />
          <text x="750" y="152" textAnchor="middle" className="fill-white" fontSize="9" fontWeight="600" fontFamily="monospace">3</text>
        </svg>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Zero<span className="text-primary">ID</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link href="#why" className="transition-colors hover:text-foreground">
            Why ZeroID
          </Link>
          <Link href="#features" className="transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-foreground">
            How it Works
          </Link>
          <Link href="https://github.com/highflame-ai/zeroid" className="transition-colors hover:text-foreground">
            Docs
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/highflame-ai/zeroid" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
            <GithubIcon className="size-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
          <Link href="https://github.com/highflame-ai/zeroid" className={cn(buttonVariants({ size: "sm" }))}>
            Get Started
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function HeroCredentialCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="font-heading text-sm font-semibold text-foreground">Live Delegation Chain</span>
        <Badge variant="outline" className="gap-1 border-emerald-500/30 bg-emerald-500/5 text-emerald-600 text-[10px]">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          3 active
        </Badge>
      </div>

      <div className="px-5 py-6">
        {/* Chain visualization */}
        <div className="flex flex-col items-center gap-0">
          {/* Level 0: Human */}
          <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5 shadow-sm">
            <div className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground">A</div>
            <div>
              <p className="text-sm font-medium text-foreground">Alice</p>
              <p className="text-[10px] text-muted-foreground">Human &middot; Full access</p>
            </div>
            <Badge variant="secondary" className="ml-auto text-[10px]">read write delete</Badge>
          </div>

          {/* Connector + attenuation label */}
          <div className="flex flex-col items-center py-1">
            <div className="h-5 w-px border-l border-dashed border-primary/40" />
            <div className="rounded-full bg-primary/10 px-2.5 py-0.5">
              <span className="font-mono text-[9px] font-medium text-primary">delegates &darr;</span>
            </div>
            <div className="h-5 w-px border-l border-dashed border-primary/40" />
          </div>

          {/* Level 1: Orchestrator */}
          <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 shadow-sm">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">O</div>
            <div>
              <p className="text-sm font-medium text-foreground">Orchestrator</p>
              <p className="text-[10px] text-muted-foreground">Agent &middot; 15 min TTL</p>
            </div>
            <Badge variant="secondary" className="ml-auto text-[10px]">read write</Badge>
          </div>

          {/* Connector + attenuation */}
          <div className="flex flex-col items-center py-1">
            <div className="h-5 w-px border-l border-dashed border-amber-500/40" />
            <div className="rounded-full bg-amber-500/10 px-2.5 py-0.5">
              <span className="font-mono text-[9px] font-medium text-amber-600">narrows scope &darr;</span>
            </div>
            <div className="h-5 w-px border-l border-dashed border-amber-500/40" />
          </div>

          {/* Level 2: Sub-agents side by side */}
          <div className="flex items-stretch gap-3">
            <div className="flex flex-1 items-center gap-2.5 rounded-lg border border-border bg-background px-3.5 py-2.5 shadow-sm">
              <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">S</div>
              <div>
                <p className="text-xs font-medium text-foreground">Summarizer</p>
                <p className="text-[10px] text-muted-foreground">5 min TTL</p>
              </div>
              <Badge variant="secondary" className="ml-auto text-[10px]">read</Badge>
            </div>
            <div className="flex flex-1 items-center gap-2.5 rounded-lg border border-border bg-background px-3.5 py-2.5 shadow-sm">
              <div className="flex size-7 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-600">W</div>
              <div>
                <p className="text-xs font-medium text-foreground">Writer</p>
                <p className="text-[10px] text-muted-foreground">5 min TTL</p>
              </div>
              <Badge variant="secondary" className="ml-auto text-[10px]">write</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: key insight */}
      <div className="border-t border-border bg-muted/30 px-5 py-3">
        <p className="text-center text-xs text-muted-foreground">
          Each agent only gets the permissions it needs &mdash; never more than its parent.
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 border-primary/20 bg-primary/5 text-primary"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              Open Source &middot; Apache 2.0
            </Badge>

            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Identity infrastructure
              <br />
              <span className="text-primary">for the agentic era.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Issue short-lived credentials. Delegate between agents with
              attenuated scope. Verify anywhere. The open-source identity
              layer for autonomous AI agents.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="font-heading text-sm font-medium tracking-widest text-primary/80">
                ISSUE
              </span>
              <span className="text-muted-foreground/40">&rarr;</span>
              <span className="font-heading text-sm font-medium tracking-widest text-primary/80">
                DELEGATE
              </span>
              <span className="text-muted-foreground/40">&rarr;</span>
              <span className="font-heading text-sm font-medium tracking-widest text-primary/80">
                VERIFY
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="https://github.com/highflame-ai/zeroid" className={cn(buttonVariants({ size: "lg" }))}>
                Get Started
                <ArrowRight className="size-4" />
              </Link>
              <Link href="https://github.com/highflame-ai/zeroid" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                Read the Docs
                <ExternalLink className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Right side: credential card */}
          <div className="hidden md:block">
            <HeroCredentialCard />
          </div>
        </div>

        <DelegationFlowDiagram />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

const stats = [
  {
    value: "100:1",
    label: "Non-human identities outnumber humans in cloud-native orgs",
  },
  {
    value: "44%",
    label: "Of organizations still use static credentials for agent auth",
  },
  {
    value: "15 min",
    label: "Default credential TTL in ZeroID \u2014 not days, not forever",
  },
  {
    value: "0",
    label: "Long-lived credentials required with ZeroID",
  },
];

function Stats() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="font-heading text-4xl font-bold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Why Now (Problem)
// ---------------------------------------------------------------------------

function WhyNow() {
  return (
    <section id="why" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <p className="font-heading text-sm font-medium tracking-wide text-primary">
              The Problem
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              IAM for humans
              <br />
              wasn&apos;t built for agents.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Agents spawn sub-agents, operate without humans in the loop,
              and need delegation chains verified across multi-step workflows.
              Static credentials and long-lived OAuth tokens are the wrong
              abstraction.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-red-500" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Static credentials</span>{" "}
                  &mdash; no identity, no audit trail, no expiry
                </p>
              </div>
              <div className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-red-500" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Long-lived OAuth</span>{" "}
                  &mdash; user identity only, no agent attribution, no delegation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-red-500" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">No identity at all</span>{" "}
                  &mdash; agents are invisible to your security stack
                </p>
              </div>
              <Separator className="my-4" />
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">ZeroID</span>{" "}
                  &mdash; agent + user + chain identity, short-lived, delegatable, revocable
                </p>
              </div>
            </div>
          </div>

          {/* Old vs New comparison as protocol artifact */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-red-500/20 bg-red-500/5 shadow-sm">
              <div className="border-b border-red-500/10 px-4 py-2.5">
                <span className="font-mono text-xs text-red-500/70">before.env</span>
              </div>
              <pre className="p-5 font-mono text-sm leading-relaxed">
                <span className="text-muted-foreground/60"># Who is this? Nobody knows.</span>
                {"\n"}
                <span className="text-red-500">GITHUB_TOKEN</span>
                <span className="text-foreground">=</span>
                <span className="text-muted-foreground">ghp_a1b2c3d4e5...forever</span>
                {"\n"}
                <span className="text-red-500">SLACK_TOKEN</span>
                <span className="text-foreground">=</span>
                <span className="text-muted-foreground">xoxb-never-expires</span>
                {"\n"}
                <span className="text-muted-foreground/60"># No identity. No delegation. No audit.</span>
              </pre>
            </div>

            <div className="overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-500/5 shadow-sm">
              <div className="border-b border-emerald-500/10 px-4 py-2.5">
                <span className="font-mono text-xs text-emerald-500/70">after-zeroid.json</span>
              </div>
              <pre className="p-5 font-mono text-sm leading-relaxed">
                <span className="text-muted-foreground/60">{"// Full chain of custody"}</span>
                {"\n"}
                <span className="text-foreground">{"{"}</span>
                {"\n"}
                {"  "}<span className="text-primary">&quot;sub&quot;</span>
                <span className="text-foreground">: </span>
                <span className="text-emerald-600">&quot;spiffe://z/agent/a1&quot;</span>
                {"\n"}
                {"  "}<span className="text-primary">&quot;on_behalf&quot;</span>
                <span className="text-foreground">: </span>
                <span className="text-emerald-600">&quot;alice@acme.corp&quot;</span>
                {"\n"}
                {"  "}<span className="text-primary">&quot;scope&quot;</span>
                <span className="text-foreground">: </span>
                <span className="text-emerald-600">&quot;read:docs&quot;</span>
                {"\n"}
                {"  "}<span className="text-primary">&quot;exp&quot;</span>
                <span className="text-foreground">: </span>
                <span className="text-amber-600">&quot;15m&quot;</span>
                {"\n"}
                {"  "}<span className="text-primary">&quot;chain&quot;</span>
                <span className="text-foreground">: </span>
                <span className="text-emerald-600">&quot;alice &rarr; orch &rarr; a1&quot;</span>
                {"\n"}
                <span className="text-foreground">{"}"}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

const features = [
  {
    icon: Shield,
    title: "Cryptographic Identity",
    description:
      "Every agent gets a stable, globally unique SPIFFE identity URI and an EC P-256 keypair. Credentials are cryptographically verifiable and carry the full delegation chain.",
  },
  {
    icon: GitBranch,
    title: "Delegation Chains",
    description:
      "When one agent delegates to another, scope is automatically attenuated. Sub-agents can never exceed the permissions their parent holds. The full chain is embedded in every token.",
  },
  {
    icon: Clock,
    title: "Short-Lived Credentials",
    description:
      "Tokens have configurable TTLs, down to minutes. No long-lived credentials sitting in environment variables. Expired tokens are simply ignored \u2014 no cleanup needed.",
  },
  {
    icon: Lock,
    title: "Real-Time Revocation",
    description:
      "Revoke any agent\u2019s credentials instantly. The entire delegation chain downstream is invalidated in real time. No waiting for token expiry.",
  },
];

function Features() {
  return (
    <section id="features" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-medium tracking-wide text-primary">
            Features
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Identity infrastructure,
            <br />
            built for agents.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            OAuth/OIDC tokens weren&apos;t designed for agents that spawn
            sub-agents, operate without humans, or need delegation chains
            verified across multi-step workflows. ZeroID is.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border/60 bg-card/50 transition-colors hover:bg-card"
            >
              <CardContent className="p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Architecture
// ---------------------------------------------------------------------------

function Architecture() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-medium tracking-wide text-primary">
            Architecture
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            One identity layer.
            <br />
            Every agent.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ZeroID sits between your agents and the services they access.
            Register once, issue credentials on demand, verify at every boundary.
          </p>
        </div>
        <div className="mt-12">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// How It Works
// ---------------------------------------------------------------------------

const steps = [
  {
    step: "01",
    title: "Register an agent",
    description:
      "Give each agent a SPIFFE identity. ZeroID issues a unique URI and EC P-256 keypair.",
    code: `zeroid agent create \\
  --name orchestrator \\
  --scope "read:docs,write:summaries"

# \u2192 spiffe://zeroid.dev/agent/orchestrator-7f3a
# \u2192 EC P-256 keypair written to ./keys/`,
  },
  {
    step: "02",
    title: "Issue credentials",
    description:
      "Request short-lived tokens with attenuated scope. The full delegation chain is embedded in every credential.",
    code: `token, err := zeroid.Issue(ctx, &zeroid.Claim{
  Agent:    "spiffe://zeroid.dev/agent/a1",
  OnBehalf: "user:alice@acme.corp",
  Scope:    []string{"read:docs"},
  TTL:      15 * time.Minute,
})`,
  },
  {
    step: "03",
    title: "Verify anywhere",
    description:
      "Any service can verify the token, inspect the delegation chain, and enforce scope boundaries. Zero network calls required.",
    code: `claims, err := zeroid.Verify(ctx, tokenString)
// claims.Agent    \u2192 spiffe://zeroid.dev/agent/a1
// claims.OnBehalf \u2192 user:alice@acme.corp
// claims.Scope    \u2192 ["read:docs"]
// claims.Chain    \u2192 [alice \u2192 orchestrator \u2192 a1]`,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-medium tracking-wide text-primary">
            How it Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to
            <br />
            agent identity.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From zero to cryptographically verifiable agent credentials in
            minutes.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="grid items-start gap-8 md:grid-cols-[1fr_1.5fr]"
            >
              <div className="pt-2">
                <span className="font-heading text-sm font-medium text-primary">
                  {step.step}
                </span>
                <h3 className="mt-2 font-heading text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                  <Terminal className="size-3.5 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">
                    terminal
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-foreground/80">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Comparison Table
// ---------------------------------------------------------------------------

type ComparisonValue = { text: string; good?: boolean };

const comparisonRows: {
  label: string;
  staticCred: ComparisonValue;
  oauth: ComparisonValue;
  zeroid: ComparisonValue;
}[] = [
  {
    label: "Agent identity",
    staticCred: { text: "None", good: false },
    oauth: { text: "User only", good: false },
    zeroid: { text: "Agent + User + Chain", good: true },
  },
  {
    label: "Delegation",
    staticCred: { text: "N/A", good: false },
    oauth: { text: "N/A", good: false },
    zeroid: { text: "Scope-attenuated chains", good: true },
  },
  {
    label: "Credential lifetime",
    staticCred: { text: "Forever", good: false },
    oauth: { text: "Hours to days", good: false },
    zeroid: { text: "Minutes (configurable)", good: true },
  },
  {
    label: "Revocation",
    staticCred: { text: "Manual rotation", good: false },
    oauth: { text: "Token-level", good: false },
    zeroid: { text: "Cascade invalidation", good: true },
  },
  {
    label: "Audit trail",
    staticCred: { text: "IP-based", good: false },
    oauth: { text: "User-based", good: false },
    zeroid: { text: "Full chain attribution", good: true },
  },
  {
    label: "Open source",
    staticCred: { text: "N/A" },
    oauth: { text: "N/A" },
    zeroid: { text: "Apache 2.0", good: true },
  },
];

function ComparisonIcon({ value }: { value: ComparisonValue }) {
  if (value.good === true) return <Check className="size-3.5 text-emerald-500" />;
  if (value.good === false) return <Minus className="size-3.5 text-muted-foreground/50" />;
  return null;
}

function Comparison() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-medium tracking-wide text-primary">
            Comparison
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Why not just use
            <br />
            what you have?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Existing credential systems weren&apos;t designed for autonomous
            agents. Here&apos;s what changes.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card/50">
                  <th className="px-6 py-4 text-left font-heading text-xs font-medium tracking-wide text-muted-foreground"></th>
                  <th className="px-6 py-4 text-left font-heading text-xs font-medium tracking-wide text-muted-foreground">
                    STATIC CREDENTIALS
                  </th>
                  <th className="px-6 py-4 text-left font-heading text-xs font-medium tracking-wide text-muted-foreground">
                    LONG-LIVED OAUTH
                  </th>
                  <th className="px-6 py-4 text-left font-heading text-xs font-medium tracking-wide text-primary">
                    ZEROID
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border/60 last:border-0">
                    <td className="px-6 py-3.5 font-medium text-foreground">
                      {row.label}
                    </td>
                    <td className="px-6 py-3.5 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <ComparisonIcon value={row.staticCred} />
                        {row.staticCred.text}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <ComparisonIcon value={row.oauth} />
                        {row.oauth.text}
                      </span>
                    </td>
                    <td className="px-6 py-3.5">
                      <span className="flex items-center gap-2 font-medium text-foreground">
                        <ComparisonIcon value={row.zeroid} />
                        {row.zeroid.text}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Standards
// ---------------------------------------------------------------------------

const standards = [
  { name: "OAuth 2.1", description: "Token issuance, authorization, and short-lived credential flows" },
  { name: "RFC 8693", description: "Token exchange and scope-attenuated delegation" },
  { name: "WIMSE", description: "Workload identity in multi-service environments" },
  { name: "SPIFFE", description: "Secure production identity framework for agents" },
];

const roadmapItems = [
  {
    title: "Decision-Rights Matrix binding",
    description: "Cryptographic hash of governance policy embedded in every delegation credential. Prove which policy version an agent operated under at the moment it acted.",
    status: "In design",
  },
  {
    title: "Forward-secret identity-bound channels",
    description: "Noise XX or equivalent protocol layer where the channel and the agent identity are the same cryptographic object. For cross-org agent communication.",
    status: "Planned",
  },
  {
    title: "Hardware attestation",
    description: "HSM and enclave binding for agent credentials. AWS Nitro, GCP vTPM, and Azure SEV-SNP attestation documents embedded in ZeroID tokens.",
    status: "Planned",
  },
  {
    title: "Multi-cloud workload federation",
    description: "ZeroID as the OIDC provider that AWS STS, GCP Workload Identity Federation, and Azure Entra ID trust for cross-cloud agent identity.",
    status: "In progress",
  },
];

function Standards() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <p className="font-heading text-sm font-medium tracking-wide text-primary">
              Standards &amp; Conformance
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Built on open standards.
              <br />
              Ahead of the curve.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              ZeroID&apos;s vault pattern and delegation chain model are directly
              conformant with the emerging agent identity standard. Our
              implementation is already stronger than what most organizations
              achieve with enterprise IAM vendors.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              No proprietary lock-in. No vendor-specific token formats.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {standards.map((standard) => (
              <div
                key={standard.name}
                className="rounded-lg border border-border/60 bg-card/50 p-4"
              >
                <Badge variant="secondary" className="font-heading">
                  {standard.name}
                </Badge>
                <p className="mt-2 text-sm text-muted-foreground">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Roadmap
// ---------------------------------------------------------------------------

function Roadmap() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-medium tracking-wide text-primary">
            Roadmap
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            What&apos;s next.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Closing the remaining gaps to full standard conformance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {roadmapItems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border/60 bg-card/50 p-6"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-base font-semibold">
                  {item.title}
                </h3>
                <Badge
                  variant="outline"
                  className={cn(
                    "shrink-0 text-xs",
                    item.status === "In progress"
                      ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-600"
                      : item.status === "In design"
                        ? "border-amber-500/30 bg-amber-500/5 text-amber-600"
                        : "border-border text-muted-foreground"
                  )}
                >
                  {item.status}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA (merged with Open Source)
// ---------------------------------------------------------------------------

function CTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10">
            <GithubIcon className="size-8 text-primary" />
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Open source.
            <br />
            <span className="text-primary">Ready when you are.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Apache 2.0 licensed. Self-host on your infrastructure or use our
            managed service. Get started in minutes, not months.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-emerald-500" />
              Apache 2.0
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-emerald-500" />
              Self-hostable
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-emerald-500" />
              No telemetry
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-emerald-500" />
              Full source
            </span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="https://github.com/highflame-ai/zeroid" className={cn(buttonVariants({ size: "lg" }))}>
              <GithubIcon className="size-4" />
              View on GitHub
            </Link>
            <Link href="https://github.com/highflame-ai/zeroid" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              Read the Docs
              <ExternalLink className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-heading text-sm font-medium text-muted-foreground">
          Zero<span className="text-foreground">ID</span>
        </span>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="https://github.com/highflame-ai/zeroid" className="transition-colors hover:text-foreground">
            GitHub
          </Link>
          <Link href="https://github.com/highflame-ai/zeroid" className="transition-colors hover:text-foreground">
            Docs
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <span>Apache 2.0</span>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <WhyNow />
        <Features />
        <Architecture />
        <HowItWorks />
        <Comparison />
        <Standards />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
