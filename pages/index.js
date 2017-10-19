import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h3>
          Netlify Support Engineer - First Steps: Answer to Support Questions
        </h3>
        <ul>
          <li><strong>5 most favorite and 5 least favorite support tasks</strong>
            <p><strong>Disclaimer</strong>: <em>I like all of the listed tasks (almost equally) and I'm happy to take on any of them at any time.
            My default answer is 'no favorites'; however, since it seems I must make choices, I've made some very hard ones here :)</em>
            </p>
            <ul>
              <li><em>5 most favorite</em>
                <ol>
                  <li>Debug a customer's build using a programming language and framework that you've never seen before</li>                  
                  <li>Help train and onboard new support teammates</li>
                  <li>Analyze thousands of support tickets to spot trends to improve our product</li>
                  <li>Work with the development team to help design a new feature based on feedback from customers</li>
                  <li>Set up my own copy of several static site frameworks for debugging</li>
                </ol>
              </li>
              <li><em>5 least favorite</em>
                <ol>
                  <li>Dig through server logs to troubleshoot a customer's website behavior</li>
                  <li>Respond to Netlify fans on Twitter</li>
                  <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
                  <li>Help manage communications during a service outage</li>
                  <li>Respond to 60+ support requests via email or chat every day</li>
                </ol>
              </li>
            </ul>
          </li>
          <li><strong>My favorite thing about providing technical support</strong>
            <p> My favorite thing about providing technical support is getting to solve a problem I have not seen before, and 
              then helping someone with that same problem! I see it as the shortest and most exciting path to learning.
            </p>
          </li>
          <li><strong>What I thought of the Netlify service during the time I used it</strong>
            <p>I thought it was <strong>awesome</strong>! My first experience was moving my existing portfolio site to Netlify. Everything, 
            from connecting a GitHub repository to setting a custom domain to configuring SSL, was a breeze. Compared with other options I've tried:
            Heroku, GitHub Pages, and Surge, Netlify is far far far easier to setup. On top of this, my Netlify site is faster (blazing fast)
            and comes with free SSL! Yet there is more: the <code>Deploy to Netlify</code> feature on StaticGen, 
            which I used to start off this site, is equally awesome!
            </p>
          </li>
          <li><strong>How I made this site, why I chose Gatsby and how I solved the small challenge I faced</strong>
            <ul>
              <li><em>How I made the site in five easy steps</em>
                <ol>
                  <li>I followed the link to StaticGen provided in the email and reviewed the options.</li>
                  <li>I used the <code>Deploy to Netlify</code> link on Gatsby to create starter site (thanks for this!).</li>
                  <li>Following instructions on Gatsby site, I installed Gatsby with <code>npm install --global gatsby-cli</code>.</li>
                  <li>I cloned the repository created by the magical step (2) above, cd'ed into the project directory 
                    and installed the dependencies with <code>npm install</code>.</li>
                  <li>I spanwned a development server with <code>gatsby deploy</code>, made desired changes to the project and pushed changes back
                    to the GitHub repository.</li>
                </ol>
              </li>
              <li><em>Why I chose Gatsby</em>
                <p>I wanted something that could work on Windows and with existing development tools at the shortest possible time. Gatsby was the perfect fit: 
                Windows, JavaScript (NPM), and React. Jekyll (based on Ruby) came close but is not natively supported on Windows - no time to invest on 
                Ruby gem issues now. However, I intend to tinker with it later on, as its popularity makes it a more likely choice for customers.
                </p>
              </li>
              <li><em>How I solved the small challenge I faced</em>
                <p>Turned out that the first time I ran <code>gatsby develop</code>, the server started and then crashed with a very ugly output 
                  and a cryptic error: <code>Cannot resolve module '.gatsby-context'</code>. Irked, I jumped on the bug and shot it down!
                  <ul>
                    <li>I copied the error text above and ran it through a Google search</li>
                    <li>I followed the search result that led to a reported issue on Gatsby: <a href="https://github.com/gatsbyjs/gatsby-starter-documentation/issues/17">
                      https://github.com/gatsbyjs/gatsby-starter-documentation/issues/17</a></li>
                    <li>I ran the recommended <code>./node_modules/.bin/gatsby develop</code>, and, voila!</li>
                    <li>(I have others ideas to explore later: like changining the Gatsby version specified in the package) </li>  
                  </ul>
                </p>
              </li>
            </ul>
          </li>
          <li><strong>Suggestion to improve this test</strong>
            <p>Please consider providing some perspective (if you can) on the 5 most favorite/5 least favorite question - whether it's supposed to be a right
              or wrong answer question or you're just trying to check personality/preferences. I don't really have any strong preference, 
              so it was hard for me to choose! Thank you!
            </p>
          </li>
          <li><strong>Link to a well-done developer-focused product documentation, and why I think it's well done </strong>
            <p><a href="https://www.gatsbyjs.org/docs/">Gatsby documentation</a>. It think it's well done because it is simple and easy 
              to follow, and it provides relevant examples to drive home the points. On top of this, the documentation site itself is highly readable!
            </p>
          </li>
          <li><strong>Why I think SSL/HTTPS is important</strong>
          <p>I think SSL/HTTPS is important because it helps keep private information, from emails to credit card details, private. In word one word: <em>security</em>.
           Filling out private information on the Internet without it is as good as publishing them in the dailies. 
           Related to this primary reason is <em>credibility</em>: in my opinion, even sites not handling user's 
           private information in any way (like this one) 'command' a different level of trust and respect. 
           I hate to see the ugly 'not secure' label on my browser's address bar!
          </p>
          </li>
          <li><strong>What I think are 2 major challenges around DNS configuration for less-technical internet end-users</strong>
            <ol>              
              <li><em>Basic knowledge: What in the world is DNS?</em>
                <p>A less-technical internet user most likely has no knowledge of basic networking, so DNS just sounds like DNA 
                (or worse, assuming limited medical knowledge). I believe this is the fist hurdle to cross.</p>

                <p>I suppose the only 'fire exit' from this hurdle is to employ an experts to do the 'dirty' job.</p>
              </li>
              <li><em>Practicals: Now I understand DNS, how do I actually configure it?</em>
                <p>Having put the basic theretical knowledge hurdle behind, it's time to roll up the sleeves and actually learn to
                configure it. This itself is another 'diploma'. Here the user will need to become comfortable with technical jargon 
                like <em>zone file</em>, <em>SOA</em> and <em>DNS record types like A and CNAME</em>.</p>

                <p>The user will also need to decide whether to host his DNS zone file with the domain registrar or another DNS host, and how to create
                correct records in each case. Thankfully, most DNS hosts have good documentation and support personnel to help with this.</p>
              </li>
            </ol>          
          </li>
          <li><strong>Customer-facing response to “site won’t build” support case</strong>
            <p>
              Hi, sorry to hear that your site won't build. First, I would like you to know that we build your site in much the same way as you build 
              it in your local development environment: we take the repository you supply along with the build command you specify and create a sandboxed
              development environment to build it. So the first things you might want to check are 
              <ul>
                <li><em>Is your site building locally?</em></li>
                <li><em>Did you specify the exact build command you are using locally?</em></li>
                <li><em>Are there missing files in the supplied repository? Are you using the correct branch</em>?</li>
              </ul>
            </p>
            <p>
              If you need help with checking any of the above, or any other thing at all, I'll be happy to jump in and help to see
              what the problem might be. If this is the case, it would be very helpful if you could specify what frameworks and build tools 
              you are using, so I would be better positioned to help out.
            </p>
          </li>
          <li><strong>Set up a redirect from “/netlify/anything” to https://www.google.com/search?q=anything</strong>
            <p>Whew, gotta give this a try some time later...</p>
          </li>
        </ul>
      </div>
    )
  }
}
