import React from "react";

// import { MDXRemote } from "next-mdx-remote/rsc";
import { BsArrowBarLeft } from "react-icons/bs";
// import rehypePrism from "rehype-prism-plus";
// import rehypeCodeTitles from "rehype-code-titles";
import Link from "next/link";
import Image from "next/image";
import "../../style/syntax-highlight.css";
import "../../style/blog-style.css";
import formatDate from "@/app/utils/blog/format-date";
import getReadTime from "@/app/utils/blog/get-read-time";

const BlogPage = ({ source, data }: any) => {
  // const options = {
  //   mdxOptions: {
  //     remarkPlugins: [],
  //     rehypePlugins: [rehypeCodeTitles, rehypePrism],
  //   },
  // };
  return (
    <div className="prose prose-dark">
      <Link href="/blog" className=" no-underline">
        <p className="flex gap-2 py-2 m-0 items-center">
          <BsArrowBarLeft /> Back
        </p>
      </Link>

      <div>
        <p className="text-foreground text-2xl py-3 m-0 font-bold">
          {data?.title}
        </p>
        <div className=" -mt-4 font-bold flex items-center justify-between">
          <p className="flex gap-2 text-xs items-center">
            {formatDate(data?.createdAt)} &#183; {getReadTime(source)} mins read
          </p>
          <p className="text-xs">{data?.views} views</p>
        </div>

        <Image
          alt=""
          src={data?.image?.url}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="border-2 border-muted rounded-xl"
        />
      </div>
      {/* <MDXRemote source={source} options={options} /> */}
    </div>
  );
};

export default BlogPage;
