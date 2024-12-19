import React from 'react';
import Link from 'next/link';
import { IPost } from '@/lib/types';
import { routes } from '@/lib/routes';
import Typography from '@/components/Typography';

interface IProps {
  post: IPost;
}

const Post = ({ post }: IProps) => (
  <article>
    <div className="flex items-center gap-x-2 mb-4">
      {post?.tags?.map((tag) => (
        <span
          className="font-medium text-xs text-primary"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="group relative">
      <Typography
        as="h3"
        variant="h6"
      >
        <Link
          className="hover:text-primary"
          href={routes.post(post?.id)}
        >
          {post?.title}
        </Link>
      </Typography>
      <p className="mt-2 line-clamp-3 text-sm/6 text-gray-600">{post?.body}</p>
    </div>
  </article>
);

export default Post;
