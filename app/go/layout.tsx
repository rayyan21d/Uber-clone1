import GoNav from "./GoNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <GoNav />
      <div>{children}</div>
    </div>
  );
}

//  <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <GoNav />
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
