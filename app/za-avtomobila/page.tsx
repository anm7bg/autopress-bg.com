import Link from 'next/link';
import { blogCard } from '@/lib/interface';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import PostCatMenu from '@/components/PostCatMenu';
import { getZaAvtomobilaPosts } from '@/lib/service';

const BlogPage = async () => {
	const posts: blogCard[] = await getZaAvtomobilaPosts();

	// console.log("Posts")
	// console.log(posts)

	return (
        // <p>Loading</p>
		<div className="blog-page">
            <PostCatMenu />
            <h1>За автомобила</h1>
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
            <p>Категория За автомобила е широка и обхваща разнообразни теми, свързани с автомобилите. В нея можете да откриете информация за различни марки и модели автомобили, техните характеристики и спецификации, начин на употреба, поддръжка и ремонт.</p>
            <p>В тази категория можете да намерите полезни съвети за каране на автомобил, като например как да шофирате по-екологично и икономично, как да изберете правилните гуми за вашия автомобил, как да поддържате батерията и др.</p>
            <p>Тук ще намерите и информация за автомобилните застраховки, както и за различните опции за финансиране на покупката на автомобил.</p>
            <p>В категорията можете да се запознаете с технологичните новости в автомобилната индустрия, като например нови системи за безопасност, хибридни и електрически автомобили, както и последните тенденции в дизайна на автомобили.</p>
		</div>
	);
};

export default BlogPage;