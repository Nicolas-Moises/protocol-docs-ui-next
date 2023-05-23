import { ArrowRight } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:font-extrabold prose-h1:text-2xl prose-h2:text-lg prose-h2:font-medium prose-p:text-zinc-400 
    prose-p:text-sm prose-p:leading-relaxed prose-a:text-sm prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-green-400 prose-a:no-underline 
    hover:prose-a:underline hover:prose-a:text-green-400 prose-a:transition-all prose-a:duration-200"
    >
      <h1 id="authentication">API Documentation</h1>
      <p>Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.</p>
      <div className='flex items-center gap-4'>
        <button className="border border-green-800 bg-cyan-400/10 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium hover:border-green-400 transition-colors duration-200 whitespace-nowrap flex gap-2
      items-center
        "><span>Quickstart</span><ArrowRight size={12} /></button>
        <button className="border border-white/10 text-zinc-400 px-3 py-1.5 rounded-full text-sm font-medium hover:border-white/20 hover:text-white hover:bg-white/10 transition-colors duration-200 whitespace-nowrap flex gap-2
      items-center
        ">Explore SDKs</button>
      </div>
      <h2 id="basic-authentication">Getting started</h2>
      <p>To get started, create a new application in your <a href="#">developer settings</a> , then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs.
        When your integration is ready to go live, publish it to our integrations directory to reach the Protocol community.</p>
      <pre><code className="language-bash">curl https://api.protocol.chat/v1/conversations \
        <br /> -u username:password
      </code></pre>
      <p>Please don&#39;t commit your Protocol password to GitHub!</p>
      <h2 id="oauth2-with-bearer-token">OAuth2 with bearer token</h2>
      <p>The recommended way to authenticate with the Protocol API is by using OAuth2. When establishing a connection using OAuth2, you will need your access token — you will find it in the <a href="#">Protocol dashboard</a> under API settings. Here&#39;s how to add the token to the request header using cURL:</p>
      <pre><code className="language-bash">curl https://api.protocol.chat/v1/conversations \
        <br /> -H <span className='text-green-400'>&quot;Authorization: Bearer token&quot;</span>
      </code></pre>
      <p>Always keep your token safe and reset it if you suspect it has been compromised.</p>
      <h2 id="using-an-sdk">Using an SDK</h2>
      <p>If you use one of our official SDKs, you won&#39;t have to worry about any of the above — fetch your access token from the <a href="#">Protocol dashboard</a> under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes.</p>
    </main>
  )
}

