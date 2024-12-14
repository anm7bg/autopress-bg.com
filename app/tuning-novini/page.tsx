import Link from 'next/link';
import { blogCard } from '@/lib/interface';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import PostCatMenu from '@/components/PostCatMenu';
import { getTuningNoviniPosts } from '@/lib/service';

const BlogPage = async () => {
	const posts: blogCard[] = await getTuningNoviniPosts();

	// console.log("Posts")
	// console.log(posts)

	return (
        // <p>Loading</p>
		<div className="blog-page">
            <PostCatMenu />
            <h1>Тунинг новини</h1>
			<div className="posts">
				{posts.map((post: any, idx: number) => {
                    // console.log("Post")
                    // console.log(post)
					return (
						<Card className='mb-[20px]' key={idx}>
                            <Image 
                                src={post.featuredImage.node.sourceUrl} 
                                alt="image" 
                                width={600} 
                                height={400}
                                className='rounded-t-lg object-cover'
                            />
                            <CardHeader className='py-[5px] my-[5px] blog-card-head'>
                                <h2 className='blog-post-title text-center text-lg line-clamp-2'>{post.title}</h2>
                            </CardHeader>
                            <CardBody className='p-[5px]'>
                                <p className='line-clamp-2 text-sm'>{post.shortDesc}</p>
                            </CardBody>
                            <CardFooter>
                                <Button className='w-full mt7'>
                                    <Link href={`${post.slug}`}>Виж</Link>
                                </Button>
                            </CardFooter>
                        </Card>
					);
				})}
			</div>
            <p>Категорията Тунинг новини е насочена към автомобилните ентусиасти и обхваща информация за най-новите тенденции и технологии в областта на автомобилния тунинг. Тук можете да намерите актуални новини за тунинговани автомобили, включително промени в дизайна, механични подобрения, технологични иновации и други. Категорията също така може да предостави идеи за модификация на автомобили, съвети за поддръжка и справки за най-добрите места за закупуване на части и аксесоари за тунинг. В общи линии, категорията е създадена за автомобилните ентусиасти, които желаят да бъдат в крак с последните тенденции в областта на автомобилния тунинг и да намерят вдъхновение за подобряване на своята кола.</p>
		</div>
	);
};

export default BlogPage;