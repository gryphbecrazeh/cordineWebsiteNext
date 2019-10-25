// -----------------------------------------React-----------------------------------------
import React, { useContext } from "react";
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button, Input } from "reactstrap";
// -----------------------------------------Components-----------------------------------------
import Document from "../layouts/document";
// -----------------------------------------Sass-----------------------------------------
import "../scss/style.scss";

export default () => {
	return (
		<Document>
			<Container id="resume">
				<Row>
					<Col>
						<section id="personal">
							<div className="name">
								<a href="/">
									<span className="accent-2">Christopher</span> Cordine
								</a>
							</div>
							<div className="title">Web Developer</div>
							<div className="info-contact">
								<div className="email">
									<a href="mailto:christopher@cordine.site">
										christopher@cordine.site
									</a>
								</div>
								<div className="phone">
									<a href="tel:+1(516)424-2147">(516) 424-2147</a>
								</div>
							</div>
						</section>
					</Col>
				</Row>
				<Row>
					<Col md={8}>
						<section id="projects">
							<h3>Projects</h3>
							<ul>
								<li>
									<strong>Personal Website </strong>
									<em>
										NextJS, ExpressJS, NodeJS, Bootstrap, Sass, React, MongoDB,
										Webpack
									</em>
									<p>
										Built CMS for it, uses CRUD to manage and display posts of
										code/projects
									</p>
									<p>
										View this project <a href="/">here</a>.
									</p>
								</li>
								<li>
									<strong>Streamlined Company Application </strong>
									<em>
										ReactJS, ExpressJS, NodeJS, MongoDB, Bootstrap, MongoDB,
										Redux
									</em>
									<p>
										User Manager, Order Manager, Shipment Manager, Receiving
										Manager, built in ERP system, website auditor, internal
										company communications, save/track any changes made to
										anything, tracks stagnant prices, orders without a shipping
										update, identify broken links/filters on the product and
										category pages, track payments from customers, to
										distributors, taxes, etc. Everything is uploadable and
										update-able via CSV, custom user authentication system built
										in Express. Designed middleware functions to reduce client
										resource load, and carefully planned out measures to use and
										pass data between the client and server.
									</p>
									<p>{/* View this project <a href="/">here</a>. */}</p>
								</li>

								<li>
									<strong> URL and CSV loadable Content Spinner </strong>
									<em>NextJS, React, ExpressJS, NodeJS, Bootstrap, Webpack </em>
									<p>
										Scrape a URL or load in a csv potentially containing
										thousands of products, pipe through all the fields and
										identify specific keywords to generate unique and SEO
										targetted descriptions, names, etc. Outputs a new csv with
										unique information for all products put into it, or allowing
										a queue of URLs to scrape with the express custom server,
										and provide the same result.
									</p>
									<p>{/* View this project <a href="/">here</a>. */}</p>
								</li>
								<li>
									<strong> Click Scheduler Chrome Extension </strong>
									<em>Javascript, CSS, HTML </em>
									<p>
										Injects a script to call the click() function on an element
										once a specific time is met or exceeded. Absolves the need
										for an expensive cron job product import for our magento
										website, published to the Chrome Web Store for free
									</p>
									<p>
										View this project{" "}
										<a href="https://chrome.google.com/webstore/detail/click-scheduler-pro/cglnpjdjjinnbaioncegaiaifdpildne?hl=en">
											here
										</a>
										.
									</p>
								</li>
								<li>
									<strong> Bear Alert Chrome Extension </strong>
									<em> Javascript, CSS, HTML, Regex </em>
									<p>
										Injects a script to every page you access, trying to find
										the occurrence of the word "bear", mostly a proof of concept
										for another extension/app combo that I am developing. Has a
										cool stats page to access to see how many "bear"s you've
										seen, and which pages had the most occurences of bears.
										Published to the Chrome Web Store for free and fun.
									</p>
									<p>
										View this project{" "}
										<a href="https://chrome.google.com/webstore/detail/bear-alert/idhligenifohdkgfnadnppainnoicmib?hl=en">
											here
										</a>
										.
									</p>
								</li>
								<li>
									<strong> ShopCSV Chrome Extension </strong>
									<em>Javascript, CSS, HTML, Regex </em>
									<p>
										Injects a script on every page you access, you can choose to
										scrape that page, create a csv row, and append it to the
										total CSV file in the background page. Once you've made your
										selection, you can then goto the background page to download
										the CSV file, clearing it out from the extension, and
										allowing you to upload the CSV onto your Magento, Wordpress,
										Shopify, or other e-commerce website/platform, to absolve
										the tediousness of attempting to contact a manufacturer and
										hope that they have a quality dataset to provide you. Future
										implementations of this extension intend to function with a
										full stack application, allowing you to store all the
										previously created CSV's into a webserver, combine as many
										of them as you like, and connect to your stores api to
										upload the products in real time, without the need to
										generate any CSV files.
									</p>
									<p>{/* View this project <a href="/">here</a>. */}</p>
								</li>
							</ul>
						</section>
					</Col>
					<Col>
						<section id="skills">
							<h3>Skills</h3>
							<ul>
								<li>
									<strong className="accent">HTML </strong>
									{" - "}
									<em>(Started learning in 2010 Highschool, Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">CSS </strong>
									{" - "}
									<em>(Started learning in 2010 Highschool, Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Javascript </strong>
									{" - "}
									<em>(Started learning in 2017 College, Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">C++ </strong>
									{" - "}
									<em>(Started learning in 2018 College)</em>
								</li>
								<li>
									<strong className="accent">Python </strong>
									{" - "}
									<em>(Started learning 2018 College, Projects)</em>
								</li>
								<li>
									<strong className="accent">Bash </strong>
									{" - "}
									<em>(Started learning 2018 Work)</em>
								</li>
								<li>
									<strong className="accent">Git </strong>
									{" - "}
									<em>(Started learning 2017 College, Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">React </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Django </strong>
									{" - "}
									<em>(Started learning 2018 Projects)</em>
								</li>
								<li>
									<strong className="accent">Express </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Node </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">MongoDB </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Redux </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Jquery </strong>
									{" - "}
									<em>(Started learning 2017 College)</em>
								</li>
								<li>
									<strong className="accent">REGEX </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Linux Debian, APT </strong>
									{" - "}
									<em>(Started learning 2018 Work)</em>
								</li>
								<li>
									<strong className="accent">Sass </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">NextJS </strong>
									{" - "}
									<em>(Started learning 2019 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Bootstrap </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">MySQL </strong>
									{" - "}
									<em>(Started learning 2018 Projects, Work)</em>
								</li>
								<li>
									<strong className="accent">Mobile App Development </strong>
									{" - "}
									<em>(Started learning 2017 College)</em>
								</li>
								<li>
									<strong className="accent">
										Chrome Web Extension Development
									</strong>
									{" - "}
									<em>(Started learning in 2018 Projects)</em>
								</li>
							</ul>
						</section>
					</Col>
				</Row>
				<Row>
					<section id="work-experience">
						<h3>Related Work Experience</h3>
						<div className="job">
							<strong>
								Kitchenall - Web Master / Technical SEO Specialist / Product
								Manager / Software Developer
							</strong>
							{" - "}
							<em>Nov 1 2018 -> Currently Working at this Company</em>
							<ul>
								<li>
									Used GREP commands to navigate through the magento/php file
									structure
								</li>
								<li>
									Used PHP to alter theme templates and page templates to
									implement product requirements from the Google Search Console
								</li>
								<li>
									Used PHP to modify server generated pdf templates to allow for
									more fields on GoodAhead PDF generated documents
								</li>
								<li>
									Used PHP to modify the catalog and search results to hide
									filterable attributes that only have one option available on
									the page
								</li>
								<li>
									Used HTML, CSS, and Javascript to create blogs and landing
									pages for the website from PSD's provided
								</li>
								<li>
									Used React, Express, Node, MongoDB, and Redux to create a
									streamlined app to manage customers, orders, shipments,
									products, prices, discounts, website auditting, and more.
								</li>
								<li>
									Used NextJS, React, React Hooks, GIT, Express, and Node to
									build a URL scraper and CSV feedable content spinner
									application to allow for the generations of new and unique
									text content for SEO purposes.
								</li>
								<li>
									Used SEO tools such as Semrush, Lighthouse, and the Google
									Search Console to identify issues and improve our ranking with
									Google searches.
								</li>
								<li>
									Used Tarballs delivered through FTP to deploy changes to the
									website
								</li>
								<li>
									Used Tar and GZIP to archive my daily work onto my computer in
									the .archives directory to maintain a clean workspace on my
									computer, and still retrieve the work if/when needed
								</li>
								<li>
									Used REGEX and CSV files and Bulk actions to add, manage, and
									remove products from the Magento platform
								</li>
								<li>
									Used Adobe Illustrator to create logos, icons, and svg's as
									resources for the website
								</li>
								<li>
									Used Adobe Photoshop to create and edit mockups to describe
									changes to the website
								</li>
								<li>
									Used Adobe InDesign to create and edit documents and create a
									product catalog for our customers to browse through offline.
								</li>
								<li>
									Used the browser to view changes in real time for front end
									web development purposes
								</li>
								<li>
									Worked with several remote developer teams in providing
									concepts, descriptions, and mock ups of changes and features
									to make/add to the website.
								</li>
								<li>
									Used documentation for several different
									extensions/applications to identify and troubleshoot problems,
									with the software, and make necessary changes, whether on the
									front end, or in the PHP code itself to resolve the issues
									being experienced.
								</li>
								<li>
									Identified performance issues in front end javascript from
									development practices.
								</li>
								<li>
									Auditted Javascript, CSS, and PHP for issues impacting,
									design, performance, and/or user experience, and wrote
									documents to describe the problem, how to resolve it, and how
									to proceed in the future.
								</li>
								<li>
									Identified problematic practices in our product upload
									process, resulting in illegal/broken characters appearing on
									the site, used regex to identify and remove them from the site
									entirely, identified the issue with excel opening UTF-8 files
									by converting them to ISO files before reading them, led the
									change to stop using excel all together in favor of
									alternatives such as google sheets and libre office (both of
									which support regex data manipulation).
								</li>
								<li>
									Led an innitiative to improve website performance and SEO
									search rank by adding optional fields, consolidating CSS and
									JS files, lazy loading offscreen images, making the switch
									from high file size jpg and pngs to JPEG2000 and webP's, and
									identifying extensions that dramatically increase the dom size
									beyond what they should be alotted.
								</li>
								<li>
									Identified cross-site scripting hazards in our search bar,
									noticed bits of code inside the search query DB and used
									cross-site scripting techniques to create alerts, communicated
									the issue to the remote developers
								</li>
							</ul>
						</div>
						<div className="job">
							<strong>
								CollinsHarper - Contract Software Developer / DevOps
							</strong>
							{" - "}
							<em>May 10th 2019 -> July 2019 Software Developer / DevOps </em>
							<ul>
								<li>Used Vim text editor to edit code</li>
								<li>
									Used find, grep, and pipes to generate tar and GZip backups of
									the websites
								</li>
								<li>
									Used PHP code sniffer to review and validate PHP files for
									deployment
								</li>
								<li>
									Used the PSR-2 PHP style guide to maintain accessible and
									readable code, keeping code up to the quality standard
									required
								</li>
								<li>
									Used SCP and SSH to migrate and deploy code to the server,
									documented the process, and communicated to the team that it
									is ready for smoke testing
								</li>
								<li>
									Worked in an entirely remote position with a team of
									developers from around the world
								</li>
								<li>
									Worked with the team to identify and correct problems in the
									code, format or otherwise
								</li>
								<li>
									Regularly studied Linux and Bash commands to get myself up to
									speed before and during my contract on the projects
								</li>
								<li>
									Used GSuite to operate all company related business,
									maintaining communications, schedules, alerts, etc...
								</li>
								<li>
									Assisted in identifying previously deployed code containing
									backdoors
								</li>
							</ul>
						</div>
					</section>
				</Row>
			</Container>
		</Document>
	);
};
