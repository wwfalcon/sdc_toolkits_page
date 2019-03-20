(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(165),l=a(173),c=a(442),m=a(168),p=function(e){var t=e.data,a=e.location,n=Object(m.b)("tutorials"),i=t.allGhostPost.edges;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{data:t,location:a,type:"website",title:"Ghost Tutorials - Practical guides for custom publications",description:"Customise your Ghost publication to suit your needs with full tutorial guides for a variety of use-cases. Config, themes, dynamic routing and more 👉",image:n}),r.a.createElement(l.a,{headerDividerStyle:"shadow"},r.a.createElement("div",{className:"bg-tutorials"},r.a.createElement("div",{className:o.a.page.xl+" pt-vw7 pt-vw1-ns pb-vw1 white"},r.a.createElement("h1",{className:o.a.h4+" gh-integration-header-shadow"},"Tutorials"))),r.a.createElement("div",{className:o.a.page.xl+" mt-vw5 mt-vw2-ns"},r.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-20-ns gutter-36-l"},i.map(function(e){var t=e.node;return r.a.createElement(c.a,{key:t.id,post:t,className:"col-12 col-6-ns col-4-l",section:"tutorials"})})))))};p.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,allGhostPost:s.a.object.isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p;var d="3510406097"},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(167),l=a.n(o),c=(a(166),a(163)),m=a.n(c),p=a(164),d=a.n(p),u=a(174),g=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};g.defaultProps={fetchAuthorData:!1},g.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=g,w=function(e){var t=e.image;return r.a.createElement(m.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:t}),r.a.createElement("meta",{property:"og:image",content:t}),r.a.createElement("meta",{property:"og:image:width",content:"1000"}),r.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string.isRequired};var y=w,E=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,i=e.title,s=e.overwriteDefaultImage,o=e.image,l=t.ghostPost,c=t.site.siteMetadata,p=h(l.primary_author,n),g=d.a.map(Object(u.a)(l,{visibility:"public",fn:function(e){return e}}),"name"),w=g[0]||{name:"General",slug:"general"},E=s&&l.feature_image?l.feature_image:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,l.meta_title||i||l.title),r.a.createElement("meta",{name:"description",content:l.meta_description||l.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:c.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:l.og_title||i||l.meta_title||l.title}),r.a.createElement("meta",{name:"og:description",content:l.og_description||l.excerpt||l.meta_description}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:l.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:l.updated_at}),g.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}),r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:l.twitter_title||i||l.meta_title||l.title}),r.a.createElement("meta",{name:"twitter:description",content:l.twitter_description||l.excerpt||l.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:p.name}),r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),r.a.createElement("meta",{name:"twitter:data2",content:w}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(g.length?'"keywords": "'+d.a.join(g,", ")+'",':"")+'\n                        "headline": "'+(l.meta_title||i||l.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l.published_at+'",\n                        "dateModified": "'+l.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+E+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(l.meta_description||l.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+c.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:E}))};E.defaultProps={fetchAuthorData:!1},E.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=E,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,s=t.site.siteMetadata,o=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),l=i.keywords&&i.keywords.length?i.keywords[0]:null,c=P();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,i.meta_title||i.title),r.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:s.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"og:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:o}),i.keywords&&i.keywords.length?i.keywords.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),r.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),l?r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,l?r.a.createElement("meta",{name:"twitter:data2",content:l}):null,r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+d.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:c}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var R=b,q=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,s=e.image,o=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:n}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),r.a.createElement(y,{image:s}))};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var _=q,v=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,s=e.image,o=e.fetchAuthorData,c=e.overwriteDefaultImage,m=e.location,p=t||{},d=p.ghostPost,u=p.markdownRemark,g=t.site.siteMetadata,h=l.a.resolve(g.siteUrl,m.pathname,"/");if("article"===a){if(d)return r.a.createElement(f,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:c});if(u)return r.a.createElement(R,{data:t,canonical:h})}else if("website"===a||"series"===a)return r.a.createElement(_,{data:t,canonical:h,title:n,description:i,image:s,type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var k=v,x="http://ghost.local:8000",A={faq:l.a.resolve(x,"/images/meta/Ghost-FAQ.jpg"),integrations:l.a.resolve(x,"/images/meta/Ghost-Integrations.jpg"),tutorials:l.a.resolve(x,"/images/meta/Ghost-Tutorials.jpg"),default:l.a.resolve(x,"/images/meta/Ghost-Docs.jpg")},j=function(e){return A[e=e||"default"]};j.proptypes={section:s.a.string.isRequired};var P=j;a.d(t,"a",function(){return k}),a.d(t,"b",function(){return P})},442:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(260),l=a(169),c=a(165),m=function(e){var t=e.post,a=e.className,n="/"+e.section+"/"+t.slug+"/",i=t.excerpt.length>200?t.excerpt.substring(0,200)+"...":t.excerpt;return r.a.createElement(l.a,{to:n,className:a+" pa10 pa8 flex flex-column justify-between flex-third relative tutorial-post-card tdn",elevation:"1"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",{className:c.a.h3+" darkgrey nt2"},t.title)),r.a.createElement("section",{className:c.a.p+" midgrey mt4"},i)),r.a.createElement("footer",{className:"pt2 mt6 flex justify-between items-center"},r.a.createElement("div",{className:"flex items-center"},t.featured?r.a.createElement("span",{className:"bg-tutorial-color pa1 f-supersmall fw5 dib measure-0-2 mr2 white br2 pl3 pr3"},"Featured"):null,r.a.createElement(o.Tags,{post:t,autolink:!1,separator:"",visibility:"public",classes:"bg-midgrey dib word-nowrap pt1 pb1 pl2 pr2 white br2 f-supersmall"}))))};m.propTypes={post:s.a.shape({title:s.a.string.isRequired,featured:s.a.bool,tags:s.a.arrayOf(s.a.shape({name:s.a.string})),excerpt:s.a.string.isRequired}).isRequired,className:s.a.string,section:s.a.string.isRequired};var p=m;a.d(t,"a",function(){return p})}}]);
//# sourceMappingURL=component---src-pages-tutorials-js-f40da3f0f4f7061cef60.js.map