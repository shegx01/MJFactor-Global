import React, { useEffect, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import blogsData from "../../src/blogsData";
// import { GetStaticProps, GetStaticPropsContext } from 'next'

function getBlogData(id: string) {
  const specified_target = `/blogs/${id}`;
  const blog = blogsData.find(({ target }) => target === specified_target);
  return blog || null;
}

type BlogData = {
  target: string;
  body: string;
  title1: string;
  title2: string;
  imageUrl: string;
  buttonText: string;
};

const Blog: React.FC<BlogData> = () => {
  const router = useRouter();
  const [id, setId] = useState(router.query.id || "");
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setId(router.query.id as string);
    setBlog(getBlogData(router.query.id as string));
  }, [router.query.id]);
  return (
    <Box>
      <Toolbar />
      {blog && JSON.stringify(blog)}
    </Box>
  );
};

export default Blog;
