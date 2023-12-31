import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Kickstarter from '@/components/Kickstarter'
import About from '@/components/About'
import How from '@/components/How'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'

export const dynamic = 'force-dynamic'


export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  return (
    // <div className="w-full flex flex-col items-center">
    //   <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    //     <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
    //       <div />
    //       <div>
    //         {user ? (
    //           <div className="flex items-center gap-4">
    //             Hey, {user.email}!
    //             <LogoutButton />
    //           </div>
    //         ) : (
    //           <Link
    //             href="/login"
    //             className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    //           >
    //             Login
    //           </Link>
    //         )}
    //       </div>
    //     </div>
    //   </nav>

    //   <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
    //     <div className="flex flex-col items-center mb-4 lg:mb-12">
    //       <div className="flex gap-8 justify-center items-center">
    //         <Link href="https://supabase.com/" target="_blank">
    //           <SupabaseLogo />
    //         </Link>
    //         <span className="border-l rotate-45 h-6" />
    //         <NextJsLogo />
    //       </div>
    //       <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
    //       <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
    //         The fastest way to start building apps with{' '}
    //         <strong>Supabase</strong> and <strong>Next.js</strong>
    //       </p>
    //       <div className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background">
    //         Get started by editing <strong>app/page.tsx</strong>
    //       </div>
    //     </div>

    //     <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

    //     <div className="flex flex-col gap-8 text-foreground">
    //       <h2 className="text-lg font-bold text-center">
    //         Everything you need to get started
    //       </h2>
    //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    //         {resources.map(({ title, subtitle, url, icon }) => (
    //           <a
    //             key={title}
    //             className="relative flex flex-col group rounded-lg border p-6 hover:border-foreground"
    //             href={url}
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <h3 className="font-bold mb-2  min-h-[40px] lg:min-h-[60px]">
    //               {title}
    //             </h3>
    //             <div className="flex flex-col grow gap-4 justify-between">
    //               <p className="text-sm opacity-70">{subtitle}</p>
    //               <div className="flex justify-between items-center">
    //                 <svg
    //                   width="24"
    //                   height="24"
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   className="opacity-80 group-hover:opacity-100"
    //                 >
    //                   <path
    //                     d={icon}
    //                     stroke="currentColor"
    //                     strokeWidth="2"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>

    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="24"
    //                   height="24"
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
    //                 >
    //                   <polyline points="9 18 15 12 9 6" />
    //                 </svg>
    //               </div>
    //             </div>
    //           </a>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="flex flex-col gap-8 text-foreground">
    //       <div className="grid gap-2 justify-center mx-auto text-center">
    //         <h2 className="text-lg font-bold text-center">Examples</h2>
    //         <p className="text-sm">
    //           Look in the <code>_examples</code> folder to see how to create a
    //           Supabase client in all the different contexts.
    //         </p>
    //       </div>
    //       <div className="w-full justify-center border rounded-lg overflow-hidden">
    //         {examples.map(({ type, src }) => (
    //           <div
    //             key={type}
    //             className="w-full grid grid-cols-3 border-b last:border-b-0 text-sm"
    //           >
    //             <div className="flex items-center font-bold p-4 min-h-12 w-full">
    //               {type}
    //             </div>
    //             <div className="col-span-2 border-l p-4 flex items-center">
    //               <code className="text-sm whitespace-pre-wrap">{src}</code>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="flex justify-center text-center text-xs">
    //       <p>
    //         Powered by{' '}
    //         <Link
    //           href="https://supabase.com/"
    //           target="_blank"
    //           className="font-bold"
    //         >
    //           Supabase
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
    <section id='landing' className='relative w-full h-screen mx-auto bg-hero bg-cover bg-no-repeat bg-center mb-20' />
    <Kickstarter />
    <About />
    <How />
    <Contact />
    {/* <Hero /> */}
  </>
  )
}
