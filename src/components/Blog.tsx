import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      title: 'The Future of AI in Credit Analysis',
      excerpt: 'Explore how artificial intelligence is transforming traditional credit analysis methods and what it means for lenders.',
      date: 'Mar 15, 2024',
      readTime: '5 min',
      category: 'AI & Technology'
    },
    {
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',
      title: 'Blockchain Technology in Private Credit',
      excerpt: 'Understanding the impact of blockchain technology on document security and verification in private credit markets.',
      date: 'Mar 12, 2024',
      readTime: '4 min',
      category: 'Blockchain'
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      title: 'Data-Driven Decision Making',
      excerpt: 'How modern analytics and machine learning are enabling more informed lending decisions.',
      date: 'Mar 10, 2024',
      readTime: '6 min',
      category: 'Analytics'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in AI-powered credit analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;