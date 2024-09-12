// @ts-nocheck

function parseHeadings(htmlString) {
	const parser = new DOMParser();

	// Parse the HTML string into a document
	const doc = parser.parseFromString(htmlString, 'text/html');

	const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));

	const headingData = headings.map((heading) => {
		const textContent = heading.textContent;

		console.log(heading.tagName);
		console.log(`[${textContent}](#${heading.id})`);

		return {
			tag: heading.tagName,
			text: textContent.trim(),
			id: heading.id
		};
	});

	return headingData;
}

// Example usage
const html = `
    <article class="blog-article-page"><div class="container relative mx-auto grid grid-cols-8"><div class="col-span-full lg:col-span-6 lg:col-start-2"><div class="mt-6 break-words px-4 text-center font-heading text-3xl font-bold text-slate-900 dark:text-white md:mt-10 md:px-5 md:text-4xl lg:px-8 xl:px-20 xl:text-5xl mb-8 md:mb-14"><h1 class="leading-tight" data-query="post-title">Understanding Pre-Rendering and Hydration in Web Development</h1></div><div class="relative z-20 mb-8 flex flex-row flex-wrap items-center justify-center px-4 md:-mt-7 md:mb-14 md:text-lg"><div class="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start"><div style="z-index:1" class="overflow-hidden rounded-full  bg-slate-200  dark:bg-white/20 md:mr-3 h-10 w-10 md:h-12 md:w-12"><a href="https://hashnode.com/@salvadorvillalon" class="relative block h-full w-full"><span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"></span><img alt="Salvador Villalon Jr's photo" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725053036404/277bf0ee-10a2-4dec-8d59-156644fc54f3.jpeg?w=200&amp;h=200&amp;fit=crop&amp;crop=faces&amp;auto=compress,format&amp;format=webp" decoding="async" data-nimg="intrinsic" class="relative z-20 block w-full rounded-full" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"></span></a></div><a href="https://hashnode.com/@salvadorvillalon" class="font-semibold text-slate-600 dark:text-white"><span>Salvador Villalon Jr</span></a></div><div class="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start"><span class="mx-3 hidden font-bold text-slate-500 md:block">·</span><a class="tooltip-handle text-slate-700 dark:text-slate-400" data-title="Sep 9, 2024 17:05"><span>Sep 9, 2024</span></a><span class="mx-3 block font-bold text-slate-500">·</span><p class="flex flex-row items-center text-slate-700 dark:text-slate-400"><svg class="mr-2 h-5 w-5 fill-current opacity-75" viewBox="0 0 576 512"><path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"></path></svg><span>11<!-- --> min read</span></p></div></div></div></div><div class="blog-content-wrapper article-main-wrapper container relative z-30 mx-auto grid grid-flow-row grid-cols-8 xl:gap-6 2xl:grid-cols-10"><section class="blog-content-main relative z-20 col-span-8 mb-10 px-4 md:z-10 lg:col-span-6 lg:col-start-2 lg:px-0 xl:col-span-6 xl:col-start-2 2xl:col-span-6 2xl:col-start-3"><div class="relative"><div id="post-content-parent" class="relative mb-10 pb-14"><div id="post-content-wrapper" class="prose prose-lg mx-auto mb-10 min-h-30 break-words dark:prose-dark xl:prose-xl"><p>Have you wondered how Frameworks like <a target="_blank" href="https://nextjs.org/">Next.js</a>, <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby.js</a>, and <a target="_blank" href="https://remix.run/">Remix</a> work?</p>
<p>These frameworks use the concepts of Pre-rendering and Hydration, which represent significant advancements in the history of web development!</p>
<p>These frameworks leverage these concepts to create toolchains that build efficient web applications. This article will discuss Pre-rendering and Hydration and why they are important additions to the single-page application process.</p>
<p>To understand these concepts, we need to explore why they were created and what problem they are trying to solve. Let's take a look at the beginning of web applications.</p>
<h2 id="heading-web-development-in-the-past-traditional-server-side-rendering">Web Development in the Past: Traditional Server-Side Rendering</h2>
<p>Rendering and interactivity were separated. We used server-side languages like <a target="_blank" href="https://nodejs.org/en">Node.js</a>, <a target="_blank" href="https://www.php.net/">PHP</a>, <a target="_blank" href="https://www.java.com/en/">Java</a>, and <a target="_blank" href="https://rubyonrails.org/">Ruby on Rails</a>. Within our servers, we created <strong>views</strong> using templating languages like <a target="_blank" href="https://en.wikipedia.org/wiki/Jakarta_Server_Pages">JSP</a> and <a target="_blank" href="https://ejs.co/">EJS</a>. Views are HTML pages, and you could inject JavaScript or Java inside them to add functionality, dynamic data retrieved from database queries, and interactive segments with languages like <a target="_blank" href="https://jquery.com/">JQuery</a>.</p>
<h3 id="heading-the-downside-of-traditional-server-side-rendering">The Downside of Traditional Server-Side Rendering</h3>
<p><strong>Performance Issues</strong></p>
<ul>
<li><p>A request to the server needs to be made every time the user requests a page!</p>
<ul>
<li><p>This means there will be a full-page reload.</p>
</li>
<li><p>Complex queries can result in slower speeds.</p>
</li>
</ul>
</li>
</ul>
<p><strong>Scalability Challenges</strong></p>
<ul>
<li><p><strong>Global Reach</strong>: A <strong>Dynamic CDN</strong> is needed to cache your dynamic files. CDNs are better suited for static content, but companies like Cloudflare created <a target="_blank" href="https://www.cloudflare.com/products/cloudflare-workers/">Cloudflare-Workers</a> to help with the process.</p>
</li>
<li><p><strong>Upscaling Servers</strong>: If more users start using the application, there will be an increase in demand on the server. You might need to invest more in resources such as scaling up by adding more servers.</p>
</li>
</ul>
<p><strong>Duplicate Logic</strong></p>
<ul>
<li>You will have duplicate code. For example, if you're trying to validate form fields, you'll have to validate in both the EJS file and your API endpoint. Let's look at the code snippet below.</li>
</ul>
<p><strong>Duplicate Logic Example</strong></p>
<p><strong>Code in EJS:</strong></p>
<div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><pre><code class="lang-javascript">&lt;form action=<span class="hljs-string">'/submit-form'</span> method=<span class="hljs-string">'POST'</span> id=<span class="hljs-string">"myForm"</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"email"</span>&gt;</span>Email:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
&lt;/form&gt;

<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-built_in">document</span>
        .getElementById(<span class="hljs-string">'myForm'</span>)
        .addEventListener(<span class="hljs-string">'submit'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{
            <span class="hljs-keyword">const</span> email = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'email'</span>).value;

            <span class="hljs-keyword">if</span> (!email.includes(<span class="hljs-string">'@'</span>)) {
                alert(<span class="hljs-string">'Please enter a valid email.'</span>);
                event.preventDefault();
            }
        });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre></div></div>
<p><strong>Code in Express.js</strong></p>
<div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><pre><code class="lang-javascript"><span class="hljs-keyword">import</span> express <span class="hljs-keyword">from</span> <span class="hljs-string">"express"</span>;
<span class="hljs-keyword">const</span> app = express();
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">"path"</span>);
<span class="hljs-keyword">const</span> port = <span class="hljs-number">3000</span>;

<span class="hljs-comment">// To received form data</span>

</code></pre></div></div>
<p>Traditional Server-Side Rendering had significant downsides, but the introduction of <strong>single-page applications</strong> marked a new era in web development.</p>
<h2 id="heading-traditional-server-side-rendering-vs-single-page-applications">Traditional Server-Side Rendering vs. Single-Page Applications</h2>
<h3 id="heading-what-is-a-single-page-application-spa">What is a Single Page Application (SPA)?</h3>
<blockquote>
<p>A Single-page application (SPA) is a web app implementation that loads only a single web document and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown. Allows users to use websites without loading whole new pages from the server. (<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">Source: MDN</a>)</p>
</blockquote>
<p>React was a game-changer! React enables the creation of fast applications and simplifies updating the UI easier than DOM manipulation methods. It offers several advantages:</p>
<ul>
<li><p><strong>Improved User Experience</strong></p>
<ul>
<li><p>SPA loads a single HTML file and dynamically updates the content as the user interacts with it. All of this is done without a full page reload.</p>
</li>
<li><p>SPA can update the state of the UI easily and provide instant feedback to users based on actions taken on the app.</p>
</li>
</ul>
</li>
<li><p><strong>Reduce Server Load</strong></p>
<ul>
<li>Most of the work is done by the browser. This reduces the load on the server!</li>
</ul>
</li>
<li><p><strong>Better Scalability</strong></p>
<ul>
<li><p>The browser is now doing most of the work. We can now deploy dedicated servers focused on serving data via APIs! We can easily scale horizontally. We have the option of using servers or serverless functions like <a target="_blank" href="https://aws.amazon.com/lambda/">AWS lambda</a>.</p>
</li>
<li><p>An SPA can be hosted on a static CDN like <a target="_blank" href="https://docs.netlify.com/platform/what-is-netlify/">Netlify</a>.</p>
</li>
</ul>
</li>
</ul>
<p>With the addition of toolchains like <a target="_blank" href="https://vitejs.dev/">Vite</a> and <a target="_blank" href="https://create-react-app.dev/">Create React App</a> to automate the setup of a modern JavaScript application, engineers no longer had to worry about configuring Webpack manually.</p>
<p>There are some downsides to implementing apps with just Vite and Create React App. The big one is that it relies on the browser to load all the JavaScript and HTML for us. This means that on mobile devices and slow internet, users may experience delays in seeing the page. Let’s examine the flow to explain this:</p>
<h3 id="heading-single-page-application-flow">Single Page Application Flow</h3>
<blockquote>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725392287290/04dba828-9903-4ca6-bf8e-0c0d875d587b.png?auto=compress,format&amp;format=webp" alt="Single Page Application React Flow." class="image--center mx-auto"></p>
<p>(<a target="_blank" href="https://youtu.be/d2yNsZd5PMs?si=RmnywZJEAuurseQm">Source: How NextJS REALLY Works</a>)</p>
</blockquote>
<p>Several steps are needed for the users to finally see the HTML page! First, the browser fetches the HTML. This initial HTML will be blank and incorrect. Why? Because the content comes from JavaScript. This means that it takes time for the browser to fetch JavaScript, load it, and execute it. Since the initial HTML is wrong, web crawlers and search engines will not find relevant content on the website and skip it.</p>
<p>Take a look at this GIF. Here JavaScript is disabled on the Chrome Developer Tools. The website fails to load without JavaScript. If JavaScript is enabled but the internet connection is slow, users may see a blank page for an extended period.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725392877108/d5a2eb1c-f784-4879-b02f-8c340d405c9c.gif?auto=format,compress&amp;gif-q=60&amp;format=webm" alt="Single Page Application JavaScript Disabled Test." class="image--center mx-auto"></p>
<p>This was a big problem. This led to Web Development evolving into <strong>the Pre-Rendering era.</strong></p>
<h2 id="heading-entering-a-new-world-with-pre-rendering-and-hydration">Entering a New World with Pre-Rendering and Hydration</h2>
<h3 id="heading-why-is-pre-rendering-important">Why is Pre-Rendering Important?</h3>
<p>People realized that we could generate the HTML in advance. It could be generated from our server or at build time, depending on the methods used.</p>
<p>Pre-rendering can be done in two ways - <a target="_blank" href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Server Side Rendering (SSR)</a> or <a target="_blank" href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation">Static Site Generation (SSG)</a></p>
<h3 id="heading-what-is-server-side-rendering">What is Server Side Rendering?</h3>
<p>React components are rendered on the server, and the resulting HTML is sent to the browser. This can improve SEO and initial load times. <strong>The rendering process occurs on each page request.</strong></p>
<h3 id="heading-what-is-static-site-generation-ssg">What is Static Site Generation (SSG)?</h3>
<p><strong>Static HTML pages are generated at build time.</strong> These pages can be served quickly without requiring a server to render them on the fly.</p>
<p>Either method is beneficial! <strong>Now the HTML that the user receives will be correct.</strong> They will see a page with content instead of a blank page as seen using Vite or Create React App. But there is a problem: the HTML the user receives is not interactive! They cannot click on it or submit a form. How can we add interactivity to our app? By Hydrating properly 🚰 🌊!</p>
<h3 id="heading-what-is-hydration">What is Hydration?</h3>
<p><a target="_blank" href="https://react.dev/reference/react-dom/hydrate#hydrating-server-rendered-html">Hydration</a> is what adds interactivity to our app, it loads the JavaScript that makes our app interactive.</p>
<blockquote>
<p>In React, "hydration" is how React "attaches" to existing HTML that was already rendered by React in a server environment. During hydration, React will attempt to attach event listeners to the existing markup and take over rendering the app on the client. (<a target="_blank" href="https://react.dev/reference/react-dom/hydrate#hydrating-server-rendered-html">Source: React Docs</a>)</p>
</blockquote>
<p>Let's see what the flow looks like for an app that uses Pre-Rendering and Hydration:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725392958385/eaee78cb-736c-4d49-8fb7-c9cb098d3652.png?auto=compress,format&amp;format=webp" alt="Pre-rendering flow." class="image--center mx-auto"></p>
<h3 id="heading-what-is-reconciliation"><strong>What is Reconciliation?</strong></h3>
<blockquote>
<p>Reconciliation is the process by which React determines the most efficient way to update the UI in response to changes in data or component hierarchy. (Source: <a target="_blank" href="https://www.educative.io/answers/what-is-the-concept-of-reconciliation-in-react">What is the difference between virtual and real DOM (React)?</a>)</p>
</blockquote>
<p>Reconciliation is when React figures out how to update the UI in response to changes in data or components hierarchy.</p>
<p>When components are rendered a Virtual DOM is created. If there are changes in state or props, then a new Virtual DOM is created. React then uses its diff algorithm to compare the new Virtual DOM with the previous Virtual DOM to check for changes. This is <strong>reconciliation</strong>.</p>
<p>Based on the changes found, <strong>React is not going to update the entire UI</strong>, instead, it will <strong>select which elements need to be updated!</strong> This <a target="_blank" href="https://www.educative.io/answers/what-is-the-concept-of-reconciliation-in-react">article</a> helped me understand Reconciliation.</p>
<h3 id="heading-pre-rendering-and-hydration-in-action"><strong>Pre-rendering and Hydration in Action</strong></h3>
<p>During the Pre-rendering and Hydration flow, first, the user will see HTML with the correct content.</p>
<p>Then Hydration kicks in and loads JavaScript to give interactivity to the application!</p>
<p>Let's simulate the process of what happens if the Hydration process takes a long time (due to a slow internet connection) or if the user has JavaScript disabled. Here is a gif where I disable JavaScript on my Portfolio. I created my portfolio using <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a> a <strong>static-site-generation framework. (it also have server-side rendering capabilities)</strong></p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725554638438/698fd854-e828-44cd-996a-e01b154803d1.gif?auto=format,compress&amp;gif-q=60&amp;format=webm" alt="Portfolio JavaScript Disabled Test." class="image--center mx-auto"></p>
<p>Even though there is no JavaScript, I can still see content on my portfolio. That’s because the user received <strong>pre-render HTML</strong>! You can see that I cannot click on the <strong><em>dropdown menu items or the buttons</em></strong> that say About Me, Projects, and Experience. That’s because the JavaScript did not load so the user cannot interact with it.</p>
<h3 id="heading-a-mental-model-for-hydration"><strong>A Mental Model for Hydration</strong></h3>
<p><a target="_blank" href="https://www.joshwcomeau.com/">Josh Comeau</a> created a cool mental model for Hydration. Josh calls it the <strong>“Two Pass Rendering.”</strong></p>
<blockquote>
<p>The first pass, at compile-time, produces all of the static non-personal content and leaves holes where the dynamic content will go. Then, after the React app has mounted on the user's device, a second pass stamps in all the dynamic bits that depend on the client state. (Source: <a target="_blank" href="https://www.joshwcomeau.com/react/the-perils-of-rehydration/#mental-models-13">The Perils of Hydration</a>)</p>
</blockquote>
<p>To Summarize:</p>
<ol>
<li><p><strong>The First Pass</strong>: the user sees the pre-render HTML. It contains static content, but it is missing the dynamic content.</p>
</li>
<li><p><strong>The Second Pass:</strong> JavaScript starts loading and fills in the missing dynamic pieces that depend on the client state.</p>
</li>
</ol>
<h3 id="heading-potential-errors-when-working-with-pre-rendering-and-hydration-frameworks"><strong>Potential Errors when working with Pre-rendering and Hydration Frameworks</strong></h3>
<p>When working with frameworks like Next.js, the server will return static pre-render HTML, then Hydration occurs which loads JavaScript.</p>
<p>However, we have to be careful when working with client-only properties and dynamic data. For example, take a look at this code</p>
<h4 id="heading-dynamic-data-error">Dynamic Data Error</h4>
<div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HydrationErrors</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hydration Errors<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Today date in milliseconds is {new Date().getTime()}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  );
}
</code></pre></div></div>
<p>Here the server will generate HTML with a timestamp in milliseconds. For example: <code>1724869161034</code>. The Hydration process begins, and then the client loads the HTML. Time has passed and the timestamp is different, it is now <code>172486193750</code>! This scenario causes the following error:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725555403697/ebb398ec-cd58-4b9a-aa63-c43a9b511eeb.png?auto=compress,format&amp;format=webp" alt="Mismatch text content from server and client hydration error." class="image--center mx-auto"></p>
<p>This happens because the <code>getTime()</code> function will generate a different timestamp!</p>
<p>This means that the server and client generate different HTML. The Network Tab shows us the server's response. It is a different HTML from what the client loads!</p>
<p><strong>The server's response below</strong></p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725555472118/d76c7ad0-92ab-4b77-92ea-b3d9d6a3b4fe.png?auto=compress,format&amp;format=webp" alt="Different server html generated." class="image--center mx-auto"></p>
<p><strong>The client's response below</strong></p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725555518535/af27855d-d362-44e3-8007-b01fde1d2455.png?auto=compress,format&amp;format=webp" alt="Different client html generated." class="image--center mx-auto"></p>
<p><strong>To Fix the Error</strong></p>
<div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HydrationErrors</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> [date, setDate] = useState&lt;number&gt;();

  useEffect(<span class="hljs-function">() =&gt;</span> {
    setDate(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime());
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hydration Errors<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Today date in milliseconds is {date}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  );
}
</code></pre></div></div>
<p>You can use the <code>useEffect</code> hook. Why would this work? Because the HTML that the server and client render will contain an empty <code>date</code> state variable.</p>
<p>Once the component mounts, the <code>useEffect</code> activates and adds the dynamic data from the state variable or you can use the <code>suppressHydrationWarning</code> flag and set it to true.</p>
<div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><pre><code class="lang-javascript">  &lt;p suppressHydrationWarning={<span class="hljs-literal">true</span>}&gt;Today date <span class="hljs-keyword">in</span> milliseconds is {date}&lt;/p&gt;
</code></pre></div></div>
<h4 id="heading-using-client-only-properties-error">Using Client-Only Properties Error</h4>
<p>Remember you cannot use <code>window</code> or <code>localStorage</code>. They do not exist on the server. Take the following example:</p>
<div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><div style="position:relative;"><div><button class="absolute right-0 top-0 m-2 font-mono text-xs font-semibold uppercase text-white focus:outline-none"><span class="flex flex-row items-center leading-none"><span class="mr-1">Copy</span><svg class="h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"></path></svg></span></button></div><pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HydrationErrors</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        {typeof window !== "undefined" &amp;&amp; <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This p tag will appear<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  );
}
</code></pre></div></div>
<p>Here the server returns an HTML with an empty <code>&lt;div&gt;</code> tag, but the client loads HTML that includes the <code>&lt;p&gt;</code> tag! This creates a <strong>HYDRATION ERROR!</strong></p>
<p>This is the error that you get.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725555844562/443c435c-308a-4422-b184-b2f321672519.png?auto=compress,format&amp;format=webp" alt="Cannot use client-side properties hydration error." class="image--center mx-auto"></p>
<p>The Network Tab shows us the server's response and it is an empty <code>&lt;div&gt;</code> tag.</p>
<p><strong>The server's response below</strong></p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725555958286/aeeaa522-3266-4b60-856d-d0cd3bf4d9c9.png?auto=compress,format&amp;format=webp" alt="Different server html generated." class="image--center mx-auto"></p>
<p>but the client loads HTML that says "This p tag will appear"</p>
<p><strong>The client's response below</strong></p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725556187527/173bf82a-1754-4835-9921-adea0f2e864a.png?auto=compress,format&amp;format=webp" alt="Different client html generated." class="image--center mx-auto"></p>
<p>This demo was inspired by <a target="_blank" href="https://www.youtube.com/@deeecode">Deeecode The Web</a> in <a target="_blank" href="https://youtu.be/7UOyuEHYmSE?si=Ql8z5D_pAryvTyFf">Why Do HYDRATION ERRORS Exist? And how to solve them</a>. He gives a great explanation of why Hydration Errors occur. I recommend watching it!</p>
<h2 id="heading-how-does-it-relate-to-frameworks-like-gatsbyjs-nextjs-and-remix">How does it relate to frameworks like Gatsby.js, Next.js, and Remix?</h2>
<p>Everything we have discussed is what all these frameworks focus on!</p>
<p>Static-Site Generation and Server-Side Rendering can be implemented using Gatsby.js, Next.js, and Remix. Both focus on creating a pre-render HTML ready for the user to see, then initiate Hydration to add interactivity to the app.</p>
<p>Gatsby.js, Next.js, and Remix do not replace the concept of single-page applications, they add to the process. Take a look at this flow:</p>
<blockquote>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725556321232/7d8629fd-b528-4cd7-9bc2-7de0bf1ab630.png?auto=compress,format&amp;format=webp" alt="Pre-rendering and Single Page Application combined flow." class="image--center mx-auto"></p>
<p>(<a target="_blank" href="https://youtu.be/d2yNsZd5PMs?si=RmnywZJEAuurseQm">Source: How NextJS REALLY Works</a>)</p>
</blockquote>
<p>It is adding to the current SPA flow! If you did not have Pre-rendering then the process starts where the pink box begins, with an incomplete HTML.</p>
<h2 id="heading-conclusion">Conclusion</h2>
<p>Thanks for reading this far 😃!</p>
<p>I learned a lot from writing this article. I started this research because I used Gatsby to create my <a target="_blank" href="https://salvador-villalon.netlify.app/">portfolio version 4</a> and Next.js in my job, but I did not understand the concepts behind these frameworks and why they were created.</p>
<p>I made a web application to demonstrate the topics covered in the article.</p>
<ul>
<li><p>Application: <a target="_blank" href="https://the-nextjs-pagesrouter-guide.vercel.app/">https://the-nextjs-pagesrouter-guide.vercel.app/</a></p>
</li>
<li><p>GitHub Repo: <a target="_blank" href="https://github.com/salvillalon45/the-nextjs-pagesrouter-guide">https://github.com/salvillalon45/the-nextjs-pagesrouter-guide</a></p>
</li>
</ul>
<p>In the GitHub repo you can find the code snippets for:</p>
<ul>
<li><p>A page implementing getStaticProps and getStaticPaths</p>
</li>
<li><p>A page implementing getStaticProps</p>
</li>
<li><p>A page implementing getServerSideProps with Client Side fetching</p>
</li>
<li><p>A page to demonstrate Hydration Errors</p>
</li>
<li><p>Using the API directory to implement our own API routes</p>
</li>
</ul>
<h2 id="heading-resources">Resources</h2>
<h3 id="heading-learning-about-hydration">Learning about Hydration</h3>
<ul>
<li><p><a target="_blank" href="https://youtu.be/R-BKadZWYnQ?si=imNFJL36knSPdF7S">What is Hydration</a> by Builder (Watch this one first, it explains the difference between SPA and the Pre-rendering process)</p>
</li>
<li><p><a target="_blank" href="https://youtu.be/87i0pejrULw?si=e179x9x2KkaR8AxL">What Exactly is REACT HYDRATION? And why does it matter?</a> by Deeecode The Web</p>
</li>
<li><p><a target="_blank" href="https://youtu.be/7UOyuEHYmSE?si=Ql8z5D_pAryvTyFf">Why Do HYDRATION ERRORS Exist? And how to solve them</a> by Deeecode The Web</p>
</li>
<li><p><a target="_blank" href="https://www.joshwcomeau.com/react/the-perils-of-rehydration/">The Perils of Hydration</a> by Josh W Comeau</p>
</li>
<li><p><a target="_blank" href="https://react.dev/reference/react-dom/hydrate#hydrating-server-rendered-html">Hydrate</a> by React Docs</p>
</li>
</ul>
<h3 id="heading-learning-about-nextjs">Learning about Next.js</h3>
<ul>
<li><p><a target="_blank" href="https://youtu.be/BILxV_vrZO0?si=AgzODMDFOjSx5a3w">The Story of Next.js</a> by Uidotdev (Watch to understand why Next.js was created)</p>
</li>
<li><p><a target="_blank" href="https://youtu.be/d2yNsZd5PMs?si=UZYKHUrajdXQd1y4&amp;t=1">How NextJS REALLY Works</a> by Theo Browne</p>
</li>
</ul>
<h3 id="heading-learning-about-getserversideprops-and-getstaticprops">Learning about getServerSideProps and getStaticProps</h3>
<ul>
<li><p><a target="_blank" href="https://youtu.be/xfX8nVpaycU?si=ZV-r2piDoWhLAKMi">Next.js - GetServerSideProps vs GetStaticProps</a> by Morado Web Development</p>
<ul>
<li>This video gave a clear demonstration of how the functions work! It inspired me to create the repo.</li>
</ul>
</li>
</ul>
<h3 id="heading-learning-about-reconciliation">Learning about Reconciliation</h3>
<ul>
<li><a target="_blank" href="https://www.educative.io/answers/what-is-the-concept-of-reconciliation-in-react">What is the concept of reconciliation in React?</a> by <a target="_blank" href="http://educative.io">educative.io</a></li>
</ul>
</div><style>.post-floating-bar {
              bottom: -60px;
            }
            .post-floating-bar.animation {
              -webkit-transition: .2s all;
              -o-transition: .2s all;
              transition: .2s all;
              transition-timing-function: ease-in;
            }
            .post-floating-bar.active {
              bottom: 40px
            }
            .post-floating-bar.freeze {
              bottom: 0!important;
              position: absolute!important;
              transition: none!important;
            }
            .post-floating-bar.freeze > div {
              box-shadow: none!important;
            }
            </style><div class="post-floating-bar fixed left-0 right-0 z-50 flex h-12 w-full flex-wrap justify-center 2xl:h-14 animation active"><div class="mx-auto flex h-12 max-w-[380px] flex-wrap items-center justify-around rounded-full border-1/2 border-slate-200 bg-white px-5 py-1 text-sm  text-slate-800 shadow-lg dark:border-slate-500 dark:bg-slate-700 dark:text-slate-50 2xl:h-14"><button class="border border-transparent text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200 disabled:opacity-50 flex flex-row items-center focus:outline-none rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800" type="button" variant="transparent" aria-label="Open comments"><svg class="h-4 w-4 stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 10.6667H9.83333M6.5 7.75H12.3333M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 9.99762 1.69478 10.9497 2.04839 11.8204C2.11606 11.9871 2.1499 12.0704 2.165 12.1377C2.17976 12.2036 2.18516 12.2524 2.18517 12.3199C2.18518 12.3889 2.17265 12.4641 2.14759 12.6145L1.65344 15.5794C1.60169 15.8898 1.57582 16.0451 1.62397 16.1573C1.66611 16.2556 1.7444 16.3339 1.84265 16.376C1.95491 16.4242 2.11015 16.3983 2.42063 16.3466L5.38554 15.8524C5.53591 15.8273 5.61109 15.8148 5.68011 15.8148C5.74763 15.8148 5.79638 15.8202 5.86227 15.835C5.92962 15.8501 6.01294 15.8839 6.17958 15.9516C7.05025 16.3052 8.00238 16.5 9 16.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><div data-orientation="vertical" aria-orientation="vertical" role="separator" class="my-auto w-px bg-slate-200 dark:bg-slate-700 mx-2 h-5"></div><button type="button" id="radix-:r4:" aria-haspopup="menu" aria-expanded="false" data-state="closed" aria-label="Share this article" class="outline-none outline-none! cursor-pointer rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"><svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6"><path d="M6.25 7.91667L11.75 5.08333M6.25 10.0833L11.75 12.9167M6.5 9C6.5 10.3807 5.38071 11.5 4 11.5C2.61929 11.5 1.5 10.3807 1.5 9C1.5 7.61929 2.61929 6.5 4 6.5C5.38071 6.5 6.5 7.61929 6.5 9ZM16.5 4C16.5 5.38071 15.3807 6.5 14 6.5C12.6193 6.5 11.5 5.38071 11.5 4C11.5 2.61929 12.6193 1.5 14 1.5C15.3807 1.5 16.5 2.61929 16.5 4ZM16.5 14C16.5 15.3807 15.3807 16.5 14 16.5C12.6193 16.5 11.5 15.3807 11.5 14C11.5 12.6193 12.6193 11.5 14 11.5C15.3807 11.5 16.5 12.6193 16.5 14Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><div data-orientation="vertical" aria-orientation="vertical" role="separator" class="my-auto w-px bg-slate-200 dark:bg-slate-700 mx-2 h-5"></div><a href="https://hashnode.com/draft/66d7576a335f0c493e07c0ad" class="outline-none outline-none! flex cursor-pointer items-center" aria-label="Edit my draft on hashnode.com" data-state="closed"><span class="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"><svg class="h-4 w-4 fill-current stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-5 2xl:w-5" viewBox="0 0 512 512"><path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path></svg></span></a></div></div></div></div></section></div></article>
  `;

const headings = parseHeadings(html);
console.log(headings);
