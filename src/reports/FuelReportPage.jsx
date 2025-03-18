import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Table, TableBody, TableCell, TableHead, TableRow,
} from '@mui/material';
import ReportFilter from './components/ReportFilter';
import { useTranslation } from '../common/components/LocalizationProvider';
import PageLayout from '../common/components/PageLayout';
import ReportsMenu from './components/ReportsMenu';
import ColumnSelect from './components/ColumnSelect';
import { useCatch } from '../reactHelper';
import useReportStyles from './common/useReportStyles';
import TableShimmer from '../common/components/TableShimmer';
import scheduleReport from './common/scheduleReport';

const FuelReportPage = () => {
  const navigate = useNavigate();
  const classes = useReportStyles();
  const t = useTranslation();
  const API_URL = 'http://api.toptracking.com:4000/services/reports/fuel';
  const [available, setAvailable] = useState([]);
  const [columns, setColumns] = useState(['dateTime', 'fuelRemaining']);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSubmit = useCatch(async ({ deviceIds, from, to, type }) => {

    const formatFrom = from.split('T')[0];
    const formatTo = to.split('T')[0];
    const queryString = `deviceId=${deviceIds.join(',')}&startDate=${formatFrom}&endDate=${formatTo}`;
    if (type === 'export') {
      window.location.assign(`${API_URL}/export/excel?${queryString}`);
    } else {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}?${queryString}`, {
          headers: { Accept: 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          throw Error(await response.text());
        }
      } finally {
        setLoading(false);
      }
    }
  });

  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // 12-hour time
    });
  };

  const handleSchedule = useCatch(async (deviceIds, groupIds, report) => {
    report.type = 'route';
    const error = await scheduleReport(deviceIds, groupIds, report);
    if (error) {
      throw Error(error);
    } else {
      navigate('/reports/scheduled');
    }
  });
  return (
    <PageLayout menu={<ReportsMenu />} breadcrumbs={['reportTitle', 'reportRoute']}>
      <div className={classes.container}>
        <div className={classes.containerMain}>
          <div className={classes.header}>
            <ReportFilter handleSubmit={handleSubmit} handleSchedule={handleSchedule} loading={loading}>
              <ColumnSelect
                columns={columns}
                setColumns={setColumns}
                columnsArray={available}
                rawValues
              />
            </ReportFilter>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((key) => (<TableCell key={key}>{t(key)}</TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{formattedDate(item.timestamp)}</TableCell>
                  <TableCell>{item.fuel}</TableCell>
                </TableRow>
              )) : (<TableShimmer columns={2} />)}
            </TableBody>
          </Table>
        </div>
      </div>
    </PageLayout>
  );
};

export default FuelReportPage;
