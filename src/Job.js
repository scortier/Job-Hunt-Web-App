//to display the job in card form
import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
  const [open, setOpen] = useState(false)//intialstate as false for collapse component for job detail

  /*
  card.body into 2 parts 
  right with logo
  left  :
  title the with  -  company name
  subtitle ( date as string and format depends on region ) with mb-2 as margin-bottom
  badges 1. job type  such as full time or part time 2.location with class as margin right of 2
  Link with separate div and with word wrapped inside it using word break as styling

  RIGHT:
  logo with styling
  d-sm-none - to not show logo on small screen 
  d-md-block -  to show logo on large screen

  Card text to capture all detail of the job 
  
  */
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type}</Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}
