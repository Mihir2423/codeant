import { RepoDataProps } from "@/constants/repo-data";

export const RepositoryDetails = ({ data }: { data: RepoDataProps }) => {
  return (
    <div className="flex flex-col gap-3 hover:bg-surface-accent p-6 border-t transition-all duration-100 ease-in-out group">
      <div className="flex items-center gap-2">
        <h1 className="text-content-strong font-medium text-lg">
          {data.repoName}
        </h1>
        <div className="bg-action-light px-[10px] py-[2px] border border-border-accent rounded-full">
          <p className="text-content-accent font-normal text-sm">
            {data.repoVisibility}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 md:gap-10">
        <div className="flex items-center gap-2">
          <h1 className="text-content-strong font-normal text-base">
            {data.language}
          </h1>
          <div className="bg-action rounded-full group-hover:animate-pulse size-2" />
        </div>
        <div className="flex items-center gap-2">
          <img
            alt="database"
            src="/icons/database.svg"
            width={12}
            height={12}
          />
          <h1 className="text-content-strong font-normal text-base">
            {data.size} KB
          </h1>
        </div>
        <div>
          <h1 className="text-content-strong font-normal text-base">
            {`Updated ${data.timeAgo} day${Number(data.timeAgo) > 1 ? "s" : ""} ago`}
          </h1>
        </div>
      </div>
    </div>
  );
};
