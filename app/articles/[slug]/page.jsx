import { notFound } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import "./article.css";

async function findArticle(slug) {
  const db = await createClient();
  const { data, error } = await db.from("content").select("title,slug,excerpt,body,featured_image_path,seo_title,meta_description,canonical_url,status,published_at").eq("content_type","blog").eq("slug",slug).eq("status","published").single();
  if (error) return null;
  return data;
}
export async function generateMetadata({params}) {
  const {slug}=await params; const a=await findArticle(slug); if(!a)return {title:"Article not found"};
  const meta=a.body?.metadata||{};
  const title=a.seo_title||a.title, description=a.meta_description||a.excerpt||"";
  return {title,description,alternates:a.canonical_url?{canonical:a.canonical_url}:undefined,robots:{index:meta.index!==false,follow:meta.follow!==false},openGraph:{type:"article",title:meta.ogTitle||title,description:meta.ogDescription||description,images:a.featured_image_path?[a.featured_image_path]:[]},twitter:{card:meta.twitter||"summary_large_image",title:meta.ogTitle||title,description:meta.ogDescription||description,images:a.featured_image_path?[a.featured_image_path]:[]}};
}
function cleanHtml(html="") {
 return html.replace(/<\s*(script|style|iframe|object|embed|form)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi,"")
 .replace(/\s+on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,"")
 .replace(/(href|src)\s*=\s*(['"])\s*javascript:[\s\S]*?\2/gi,'$1="#"');
}
export default async function PublishedArticle({params}) {
 const {slug}=await params; const a=await findArticle(slug); if(!a)notFound();
 const meta=a.body?.metadata||{}; const html=typeof a.body?.html==="string"?cleanHtml(a.body.html):"";
 const authorName=typeof meta.authorName==="string"&&meta.authorName.trim()?meta.authorName.trim():"OmoGiwa";
 return <main className="published-article"><a className="article-back" href="/">← Back to OmoGiwa</a><article><p className="article-category">{meta.category||"ARTICLE"}</p><h1>{a.title}</h1>{a.excerpt&&<p className="article-excerpt">{a.excerpt}</p>}<p className="article-author">By {authorName}</p>{a.featured_image_path&&<img className="article-cover" src={a.featured_image_path} alt={meta.alt||""}/>}<div className="article-body" dangerouslySetInnerHTML={{__html:html}}/><footer>Written for OmoGiwa · <a href="/#contact">Get in touch</a></footer></article></main>;
}
