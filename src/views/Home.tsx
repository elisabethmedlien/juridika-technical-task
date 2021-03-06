import { useState, useEffect } from 'react';

import { getApi } from "../functions/common";

import Table from "../components/table/Table";
import TableHeader from "../components/table/TableHeader";
import TableRow from "../components/table/TableRow";
import TableCell from "../components/table/TableCell";
import Pagination from '../components/Pagination';
import Title from '../components/Title';
import ExternalLink from '../components/ExternalLink';
import Avatar from '../components/Avatar';
import Icon from '../components/Icon';
import TableBody from '../components/table/TableBody';
import { useLocation, useHistory } from "react-router-dom";

type Repo = {
  name: string,
  id: number,
  description: string,
  homepage: string,
  avatar: string,
  rating: number,
  github_link: string
};

const Home = () => {

  const [data, setData ] = useState(Array <Repo>());
  
  let [ numberOfPages, setNumberOfPages ] = useState(0);

  const itemsPerPage = 20;
  let location = useLocation();
  let history = useHistory();

  let searchParams = new URLSearchParams(location.search);
  let urlPage = searchParams.get('page');
  let currentPage = 1;

  if (urlPage !== null) {
    currentPage = parseInt(urlPage);
  }

  useEffect(() => { getApi().then(res => {

    let data:Array <Repo> = res.items.map((e:any) => {
      return {
        name: e.name,
        id: e.id,
        description: e.description,
        homepage: e.homepage,
        avatar: e.owner.avatar_url,
        rating: e.stargazers_count,
        github_link: e.html_url
      }
    }); setData(data)

  }) },[])

  useEffect(() => setNumberOfPages(Math.ceil(data.length/itemsPerPage)),[data]);  // update number of pages on data state changes
  
  let indexLast = currentPage * itemsPerPage;
  let indexFirst = indexLast - itemsPerPage;

  let pageChange = (page:number) => {
    if ( page > 0 && page <= numberOfPages ) {
      history.push(`/?page=${page}`);
    }
  }

  return (
    <>

      <Title title="Home page" />

      <Table cn="table-repos" >
        <TableHeader>
          <TableCell>Organization</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Repo</TableCell>
          <TableCell>Description</TableCell>
        </TableHeader>
        <TableBody>
        {data.slice(indexFirst, indexLast).map((repo:Repo) => {
            return (
              <TableRow key={repo.id}>
                <TableCell>
                  <Avatar path={repo.avatar} descr={`${repo.name} avatar`} />
                  <ExternalLink path={repo.homepage}>{repo.name}</ExternalLink>
                </TableCell>
                <TableCell>{repo.rating}</TableCell>
                <TableCell>
                  <ExternalLink path={repo.github_link}>
                    <Icon cn="fab fa-github"/>
                  </ExternalLink>
                </TableCell>
                <TableCell>{repo.description}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>

      </Table>

      <Pagination handleChangePage={pageChange} currentPage={currentPage} numberOfPages={numberOfPages} />
    
    </>
  );
};

export default Home;
