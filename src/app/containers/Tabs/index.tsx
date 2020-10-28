import React, { useEffect, useState } from 'react';
import { Tab as TabUtils, Spinner } from '../../components/ui-elements';
import { useFetch } from '../../lib/hooks';
import { Url } from '../../lib/url';
import './index.styles.scss';

const { Tab, TabPanel } = TabUtils;

const tabs: Array<{
  label: string;
  value: AppTabs;
}> = [{
  label: "Users",
  value: "users"
},
{
  label: "Posts",
  value: "posts"
},
{
  label: "Comments",
  value: "comments"
}];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<AppTabs>('users');
  const { response: collection, loading, execute } = useFetch<Array<IUser | IComment | IPost>>({ initialResponse: [] });

  const isActive = (tab: AppTabs) => tab === activeTab;

  useEffect(() => {
    execute(Url.collection({ type: activeTab }).tab);
  }, [activeTab])

  return (
    <div className="tab-container">
      <div className="tab-header">
        {
          tabs.map((tab) => (
            <Tab
              onClick={() => setActiveTab(tab.value)}
              active={isActive(tab.value)}
              disabled={loading}>
              {tab.label}
            </Tab>
          ))
        }
      </div>
      {loading && <Spinner />}
      <div className="tab-content">
        {
          !loading && collection.map((member, index) => (
            //@ts-ignore
            <TabPanel record={member} key={`tab-panel-${index}`} />
          ))
        }
      </div>
    </div>
  );
}
