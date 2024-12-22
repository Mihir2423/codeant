import { Plus, RefreshCw } from "lucide-react";
import { RepositoryDetails } from "./_components/repository-detail";
import { RepoData } from "@/constants/repo-data";
import { useState } from "react";

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepos = RepoData.filter((repo) =>
    repo.repoName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex md:p-6 w-full md:h-screen">
      <div className="flex flex-1 bg-surface-elevated shadow-shadow-accent shadow-xs border md:rounded-xl w-full h-full overflow-hidden">
        <div className="flex-1 overflow-scroll">
          <div className="md:top-0 sticky flex flex-col gap-4 bg-surface-elevated px-4 md:px-6 py-5 w-full">
            <div className="flex max-md:flex-col justify-between md:items-center max-md:gap-3 w-full">
              <div className="flex flex-col gap-1">
                <h1 className="text-content-strong text-2xl">Repositories</h1>
                <p className="text-content-primary font-normal text-sm">
                  {RepoData.length} total repositories
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 shadow-shadow-accent shadow-xs px-[14px] py-[10px] border rounded-md">
                  <RefreshCw size={16} />
                  <span className="inline font-normal text-sm">
                    Refresh All
                  </span>
                </button>
                <button className="flex items-center gap-1 bg-action px-[14px] py-[10px] border rounded-md">
                  <Plus size={16} color="#fff" />
                  <span className="inline font-normal text-sm text-white">
                    Add Repository
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-[10px] shadow-shadow-accent shadow-xs px-[14px] py-[10px] border rounded-md w-full md:w-[366px]">
              <img
                alt="search"
                src="/icons/search.svg"
                width={18}
                height={18}
              />
              <input
                placeholder="Search Repositories"
                className="flex-1 placeholder:text-content-primary border-0 font-normal text-base outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredRepos.length > 0 ? (
            filteredRepos.map((data) => (
              <RepositoryDetails key={data.repoName} data={data} />
            ))
          ) : (
            <div className="flex justify-center items-center border-t h-[calc(100vh-250px)]">
              <div className="flex flex-col items-center text-content-primary gap-2">
                <img
                  src="/icons/search.svg"
                  alt="No results"
                  width={24}
                  height={24}
                  className="opacity-50"
                />
                <p className="text-lg">No repositories found</p>
                <p className="text-sm">Try adjusting your search terms</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
