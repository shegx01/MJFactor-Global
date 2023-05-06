import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import blogsData from "../../src/blogsData";
import { preprocessText } from "../../src/utils/preprocessText";
import ServiceDisplay from "../../src/components/ServicesDisplay";
import Head from "next/head";

type BlogData = {
  target: string;
  body: string;
  title1: string;
  title2: string;
  imageUrl: string;
  buttonText: string;
  blogData: string;
};

function getBlogData(id: string, blogsData: BlogData[]) {
  const specified_target = `/blogs/${id}`;
  return blogsData.find(({ target }) => target === specified_target) || null;
}

const Blog: React.FC<BlogData> = () => {
  const router = useRouter();
  const [id, setId] = useState<string | string[] | "">(router.query.id || "");
  const [blog, setBlog] = useState<BlogData | null>(null);

  useEffect(() => {
    setId(router.query.id as string);
    setBlog(() => getBlogData(router.query.id as string, blogsData));
  }, [router.query.id]);

  return (
    <Container>
     { 
     blog && <Head>
        {/* HTML Specific */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MJFACTOR - {blog.title2}</title>

        {/* Open Graph Metas */}
        <meta name="description" content={blog.body} />
        <meta property="og:title" content={ 'MJFACTOR -' + blog.title2} />
        <meta property="og:description" content={blog.body} />
        <meta property="og:image" content={router.basePath + blog.imageUrl} />
        {/* Twitter Cards meta */}
        <meta name="twitter:card" content={router.basePath + blog.imageUrl} />
        <meta name="twitter:title" content={'MJFACTOR -' + blog.title2} />
        <meta name="twitter:description" content={blog.body} />
        <meta name="twitter:image" content={router.basePath + blog.imageUrl} />
      </Head>}
      <Box css={{
        padding: "30px 0"
      }}>
        <Toolbar />
        <Typography component={"div"} variant="h6" css={{ padding: "20px 0" }}>
          {blog && (
            <div
              css={{
                paddingLeft: 10,
                fontSize: 22,
                color: "#dc00ab",
                textTransform: "capitalize",
              }}
            >
              {blog.title2}
            </div>
          )}
        </Typography>
        {blog && <ServiceDisplay imageUrl={blog.imageUrl} />}
        <Container
          sx={{
            pb: 2,
          }}
        >
          <Typography
            component={"div"}
            variant="h6"
            css={{ padding: "40px 0 10px" }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Collection of Featured Articles</span>
              {blog && <Typography color={"#B5038D"}>{blog.title1}</Typography>}
            </div>
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.5,
              fontSize: 16,
            }}
            component="span"
          >
            {blog && (
              <div
                dangerouslySetInnerHTML={{
                  __html: preprocessText(blog.blogData),
                }}
              />
            )}
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};

export default Blog;
