import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

export default function NoOppositeContent() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#1e88e5' }}/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span" fontWeight="bold">
            Full-Stack Developer
          </Typography>
          <Typography>
            DCODING
          </Typography>
          <Typography mb="20px">
            March 2024 - Present
          </Typography>
          <Typography maxWidth="500px" textAlign="justify">
            I actively work in a company in formation, being responsible for the architecture and development of web applications. My main responsibilities include:
          </Typography>
          <Typography>
          <List>
            <ListItem sx={{ mb: '-15px' }}>
              <ListItemText primary="• Design and implementation of web application architecture." />
            </ListItem>
            <ListItem sx={{ mb: '-15px' }}>
              <ListItemText primary="• Creation of APIs and services using Node.js with Express." />
            </ListItem>
            <ListItem>
              <ListItemText primary="• Applying Bootstrap to create responsive user interfaces." />
            </ListItem>
          </List>            
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AutoStoriesOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#1e88e5' }}/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span" fontWeight="bold">
            Physics Tutor
          </Typography>
          <Typography>
            Federal Institute of Rio Grande do Norte (IFRN)
          </Typography>
          <Typography mb="20px">
            June 2022 - February 2023
          </Typography>
          <Typography maxWidth="500px" textAlign="justify">
            I helped students achieve a deeper understanding of physics concepts. My responsibilities included:
          </Typography>
          <Typography>
          <List>
            <ListItem sx={{ mb: '-15px' }}>
              <ListItemText primary="• Conduct individual and group tutoring sessions." />
            </ListItem>
            <ListItem sx={{ mb: '-15px' }}>
              <ListItemText primary="• Assist and guide students during laboratory experiments." />
            </ListItem>
            <ListItem>
              <ListItemText primary="• Facilitate review sessions for test and exam preparations." />
            </ListItem>
          </List>     
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AutoStoriesOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#1e88e5' }}/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span" fontWeight="bold">
            Project Researcher
          </Typography>
          <Typography>
            Federal Institute of Rio Grande do Norte (IFRN)
          </Typography>
          <Typography mb="20px">
            May 2022 - October 2022
          </Typography>
          <Typography maxWidth="500px" textAlign="justify">
            I developed a web application aimed at managing inventory and sales for micro-enterprises, with the aim of optimizing and simplifying resource management and commercial operations processes. This project involved:
          </Typography>
          <Typography>
          <List>
            <ListItem sx={{ mb: '-15px', maxWidth: '500px', textAlign: 'justify' }}>
              <ListItemText primary="• Creation of the web application using HTML, CSS, JavaScript, PHP and MySQL." />
            </ListItem>
            <ListItem sx={{ maxWidth: '500px', textAlign: 'justify' }}>
              <ListItemText primary="• Presentation of the project at a national congress, highlighting the importance of the solution." />
            </ListItem>
          </List>     
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
