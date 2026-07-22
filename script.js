/* ================================================================
   CONFIGURATION
   ================================================================ */

const CONFIG = {
    APP: {
        name: 'Helpdesk Monitoring Dashboard',
        version: '2.0.0',
        defaultLanguage: 'en',
        defaultTheme: 'light',
        refreshInterval: 600000,
    },
    CHART: {
        colors: {
            Critical: '#f43f5e',
            High: '#fb923c',
            Medium: '#eab308',
            Low: '#10b981',
            Tier1: '#5b73ff',
            Tier2: '#8b5cf6',
            Tier3: '#06b6d4',
            'Sociomile Voice': '#5b73ff',
            'Sociomile Omni': '#8b5cf6',
            Ivowaba: '#10b981',
            Ripple10: '#f59e0b',
            Pagi: '#f59e0b',
            Siang: '#5b73ff',
            Malam: '#8b5cf6',
            issue: '#f43f5e',
            non: '#10b981',
        },
        cutout: '65%',
        borderRadius: 5,
        tension: 0.35,
    },
    PAGINATION: {
        pageSize: 10,
    },
    API: {
        tickets: 'https://script.google.com/macros/s/AKfycbyY9VnK8_ST99Ri_UDfrXmI2ILuFugNt1XR74AuJixxN4HnYIssXqA3-6VtlH-IHiTJKQ/exec?action=tickets',
        tasks: 'https://script.google.com/macros/s/AKfycbyY9VnK8_ST99Ri_UDfrXmI2ILuFugNt1XR74AuJixxN4HnYIssXqA3-6VtlH-IHiTJKQ/exec?action=tasks',
        responseTime: 'https://script.google.com/macros/s/AKfycbyY9VnK8_ST99Ri_UDfrXmI2ILuFugNt1XR74AuJixxN4HnYIssXqA3-6VtlH-IHiTJKQ/exec?action=responsetime',
        incidents: 'https://script.google.com/macros/s/AKfycbyY9VnK8_ST99Ri_UDfrXmI2ILuFugNt1XR74AuJixxN4HnYIssXqA3-6VtlH-IHiTJKQ/exec?action=incident',
        incidentSave: 'https://script.google.com/macros/s/AKfycbyY9VnK8_ST99Ri_UDfrXmI2ILuFugNt1XR74AuJixxN4HnYIssXqA3-6VtlH-IHiTJKQ/exec?action=incident',
    },
    AUTH: {
        username: 'admin',
        password: 'helpdesk2026',
        sessionKey: 'hd_auth_session',
    },
    PRIORITIES: ['Critical', 'High', 'Medium', 'Low'],
};

/* ================================================================
   LOCALIZATION
   ================================================================ */

const LOCALE = {
    id: {
        appTitle: 'Helpdesk Monitoring Dashboard',
        appSubtitle: 'Januari 2026',
        live: 'Live',
        syncing: 'Menyinkronkan…',
        syncFailed: 'Gagal sync · pakai data cadangan',
        fallback: 'Data cadangan (offline)',
        fileProtocol: '⚠ Buka via Buka-Dashboard.bat',
        period: 'Periode',
        dateRange: 'Rentang Tanggal',
        dimension: 'Dimensi',
        to: 's/d',
        dateRangeError: 'Tanggal "s/d" tidak boleh lebih awal dari tanggal "dari".',
        allMonths: 'Semua Bulan',
        allWeeks: 'Semua Minggu',
        allProducts: 'Semua Produk',
        allTiers: 'Semua Tier',
        allShifts: 'Semua Shift',
        allStaff: 'Semua Staff',
        morning: 'Pagi',
        day: 'Siang',
        night: 'Malam',
        reset: 'Reset',
        overview: 'Ringkasan',
        escalation: 'Informasi Eskalasi',
        distribution: 'Distribusi & Kategori',
        trend: 'Tren & Pola',
        totalTickets: 'Total Tiket',
        closed: 'Selesai',
        issue: 'Issue',
        nonIssue: 'Non Issue',
        activeEsc: 'Active Escalation',
        aht: 'AHT',
        sla: 'SLA Rate',
        fcrRate: 'FCR Rate',
        download: 'Unduh',
        subAll: 'Semua tiket masuk',
        subPercent: 'dari total',
        subForwarded: 'Diteruskan ke tim lain',
        subAHT: 'Rata-rata waktu menangani',
        subART: 'Rata-rata waktu merespon',
        subSLA: 'Tiket yang memenuhi SLA',
        escTotal: 'Total Eskalasi',
        escActive: 'Masih Aktif',
        escClosed: 'Sudah Selesai',
        escByProduct: 'Per Produk',
        escByTier: 'Per Tier',
        escByType: 'Per Tipe',
        escRate: 'Escalation Rate',
        priTitle: 'Distribusi Prioritas',
        priSub: 'Berdasarkan tingkat urgensi tiket',
        tierTitle: 'Tier Klien · Issue vs Non-Issue',
        tierSub: 'Distribusi per segmen klien',
        prodTitle: 'Produk · Issue vs Non-Issue',
        prodSub: 'Perbandingan per produk',
        featTitle: 'Fitur · Issue vs Non-Issue',
        featSub: 'Distribusi berdasarkan fitur',
        staffTitle: 'Tiket per Staff',
        staffSub: 'Jumlah tiket yang ditangani per staff',
        trendTitle: 'Tren Tiket 7 Hari',
        trendSub: 'Volume harian — Issue vs Non-Issue (semua data)',
        trend6MTitle: 'Tren Tiket 6 Bulan',
        trend6MSub: 'Volume bulanan — Issue vs Non-Issue (semua data)',
        shiftTitle: 'Distribusi Shift',
        shiftSub: 'Pagi · Siang · Malam',
        trendContext: 'vs. periode sebelumnya dalam rentang yang dipilih',
        up: 'naik',
        down: 'turun',
        stable: 'stabil',
        taskOverview: 'Task Overview',
        taskStatusTitle: 'Status Task',
        taskStatusSub: 'Distribusi berdasarkan status',
        taskStaffTitle: 'Task per Staff',
        taskStaffSub: 'Jumlah task yang dikerjakan',
        taskTableTitle: 'Daftar Task',
        taskTableSub: 'Seluruh task tim helpdesk',
        topClientTitle: 'Top Client Issue',
        topClientSub: 'Jumlah tiket berdasarkan client (tipe Issue)',
        topClientNameHeader: 'Nama Klien',
        topClientTotalHeader: 'Total Tiket',
        taskAllStaff: 'Semua Staff',
        taskAllStatus: 'Semua Status',
        taskSearchPlaceholder: 'Cari task / staff...',
        thClient: 'Client',
        thStaff: 'Staff',
        thTask: 'Task',
        thTag: 'Tag',
        thEscalatedto: 'Eskalasi ke',
        thStatus: 'Status',
        thDate: 'Tanggal',
        menuTicket: 'Ticket',
        menuTask: 'Task',
        menuMTM: 'Month-to-Month',
        mtmDefaultPeriod: 'Bulan Ini & Bulan Lalu',
        mtmOverview: 'Perbandingan Bulanan',
        mtmEmptyText: 'Pilih rentang tanggal untuk membandingkan bulan.',
        mtmMonthsCompared: '{count} Bulan Dibandingkan',
        mtmTableTitle: 'Perbandingan Metrik Bulanan',
        mtmTableSub: 'Metrik bulanan berdampingan',
        mtmMetricHeader: 'Metrik',
        mtmVolumeTitle: 'Volume Tiket Bulanan',
        mtmVolumeSub: 'Issue vs Non-Issue per bulan',
        mtmPriorityTitle: 'Distribusi Prioritas Bulanan',
        mtmPrioritySub: 'Distribusi prioritas per bulan',
        mtmClosedTitle: 'Selesai Bulanan',
        mtmClosedSub: 'Jumlah tiket selesai per bulan',
        mtmIssueTitle: 'Issue Bulanan',
        mtmIssueSub: 'Jumlah tiket issue per bulan',
        mtmNonIssueTitle: 'Non Issue Bulanan',
        mtmNonIssueSub: 'Jumlah tiket non-issue per bulan',
        mtmActiveEscTitle: 'Active Escalation Bulanan',
        mtmActiveEscSub: 'Jumlah eskalasi aktif per bulan',
        mtmARTTitle: 'ART Bulanan',
        mtmARTSub: 'Rata-rata waktu merespon per bulan (menit)',
        mtmAHTTitle: 'AHT Bulanan',
        mtmAHTSub: 'Rata-rata waktu menangani per bulan (menit)',
        mtmSLATitle: 'SLA Rate Bulanan',
        mtmSLASub: 'Tingkat kepatuhan SLA per bulan',
        mtmTierTitle: 'Tier Klien Bulanan · Issue vs Non-Issue',
        mtmTierSub: 'Distribusi per segmen klien per bulan',
        mtmProdTitle: 'Produk Bulanan · Issue vs Non-Issue',
        mtmProdSub: 'Perbandingan per produk per bulan',
        mtmStaffTitle: 'Tiket per Staff Bulanan',
        mtmStaffSub: 'Jumlah tiket per staff per bulan',
        mtmTaskStaffTitle: 'Task per Staff Bulanan',
        mtmTaskStaffSub: 'Jumlah task per staff per bulan',
        mtmFeatTitle: 'Fitur Bulanan · Issue vs Non-Issue',
        mtmFeatSub: 'Distribusi fitur per bulan',
        mtmShiftTitle: 'Distribusi Shift Bulanan',
        days: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
        footer: 'Helpdesk Monitoring Dashboard · Data: Google Sheets · Dibuat dengan ☕ oleh Helpdesk Developer Team',
        unassigned: 'Belum Ditugaskan',
        total: 'total',
        noData: 'Tidak ada data',
        noTasks: 'Tidak ada task ditemukan',
        from: 'dari',
        showing: 'Menampilkan',
        active: 'aktif',
        resolutionRate: 'resolution rate',
        ofTotal: 'dari total tiket',
        allData: 'Semua Data',
        vsPrevPeriod: 'vs periode sblm',
        vsPrevWeek: 'vs minggu sblm',
        vsPrevHalf: 'vs paruh sblm',
        activeEscalation: 'Active Escalation — {count} tiket belum selesai',
        totalWorkHours: 'Total Task Durasi',
        totalTasks: 'Total Task',
        inProgress: 'Sedang dikerjakan',
        completed: 'selesai',
        activeStaff: 'staff aktif',
        avgResponseTime: 'ART',
        loadingLabel: 'Memuat data...',
        loginSubtitle: 'Masuk untuk melanjutkan',
        loginUsernameLabel: 'Username',
        loginPasswordLabel: 'Password',
        loginBtnSubmit: 'Login',
        loginErrorInvalid: 'Username atau password salah.',
        incidentBtnStart: 'Record Incident',
        incidentBtnStop: 'Stop Recording',
        incidentModalTitle: 'Catat Incident',
        lblIncidentStart: 'Mulai',
        lblIncidentEnd: 'Selesai',
        lblIncidentDuration: 'Durasi',
        lblIncidentProduct: 'Product',
        lblIncidentProblem: 'Problem',
        lblIncidentRootCause: 'Root Cause',
        incidentSelectProduct: 'Pilih product',
        incidentFormRequired: 'Semua field wajib diisi.',
        incidentSaveFailed: 'Gagal menyimpan incident. Coba lagi.',
        incidentCancelBtn: 'Cancel',
        incidentSaveBtn: 'Save',
        incidentSaving: 'Menyimpan...',
        recentIncidentTitle: 'Insiden Terbaru',
        recentIncidentSub: '5 insiden terakhir berdasarkan tanggal',
        thIncidentStart: 'Waktu Mulai',
        thIncidentEnd: 'Waktu Selesai',
        thIncidentProduct: 'Product',
        thIncidentProblem: 'Problem',
        thIncidentRootCause: 'Root Cause',
        thIncidentDuration: 'Durasi',
        noIncidents: 'Tidak ada data insiden',
    },
    en: {
        appTitle: 'Helpdesk Monitoring Dashboard',
        appSubtitle: 'January 2026',
        live: 'Live',
        syncing: 'Syncing…',
        syncFailed: 'Sync failed · using cached data',
        fallback: 'Fallback data (offline)',
        fileProtocol: '⚠ Open via Buka-Dashboard.bat',
        period: 'Period',
        dateRange: 'Date Range',
        dimension: 'Dimension',
        to: 'to',
        dateRangeError: 'The "to" date cannot be earlier than the "from" date.',
        allMonths: 'All Months',
        allWeeks: 'All Weeks',
        allProducts: 'All Products',
        allTiers: 'All Tiers',
        allShifts: 'All Shifts',
        allStaff: 'All Staff',
        morning: 'Morning',
        day: 'Day',
        night: 'Night',
        reset: 'Reset',
        overview: 'Overview',
        escalation: 'Escalation Overview',
        distribution: 'Distribution & Categories',
        trend: 'Trend & Pattern',
        totalTickets: 'Total Tickets',
        closed: 'Closed',
        issue: 'Issue',
        nonIssue: 'Non Issue',
        activeEsc: 'Active Escalation',
        aht: 'AHT',
        sla: 'SLA Rate',
        fcrRate: 'FCR Rate',
        download: 'Download',
        subAll: 'All incoming tickets',
        subPercent: 'of total',
        subForwarded: 'Forwarded to another team',
        subAHT: 'Avg handling time',
        subART: 'Avg response time',
        subSLA: 'Tickets within SLA',
        escTotal: 'Total Escalations',
        escActive: 'Still Active',
        escClosed: 'Resolved',
        escByProduct: 'By Product',
        escByTier: 'By Tier',
        escByType: 'By Type',
        escRate: 'Escalation Rate',
        priTitle: 'Priority Distribution',
        priSub: 'By ticket urgency level',
        tierTitle: 'Client Tier · Issue vs Non-Issue',
        tierSub: 'Distribution by client segment',
        prodTitle: 'Product · Issue vs Non-Issue',
        prodSub: 'Comparison by product',
        featTitle: 'Feature · Issue vs Non-Issue',
        featSub: 'Distribution by feature',
        staffTitle: 'Tickets per Staff',
        staffSub: 'Number of tickets handled per staff',
        trendTitle: '7-Day Ticket Trend',
        trendSub: 'Daily volume — Issue vs Non-Issue (all data)',
        trend6MTitle: '6-Month Ticket Trend',
        trend6MSub: 'Monthly volume — Issue vs Non-Issue (all data)',
        shiftTitle: 'Shift Distribution',
        shiftSub: 'Morning · Day · Night',
        trendContext: 'vs. previous period in selected range',
        up: 'up',
        down: 'down',
        stable: 'stable',
        taskOverview: 'Task Overview',
        taskStatusTitle: 'Task Status',
        taskStatusSub: 'Distribution by status',
        taskStaffTitle: 'Tasks per Staff',
        taskStaffSub: 'Number of tasks handled',
        taskTableTitle: 'Task List',
        taskTableSub: 'All helpdesk team tasks',
        topClientTitle: 'Top Client Issue',
        topClientSub: 'Ticket count by client (Issue type)',
        topClientNameHeader: 'Contact Client Name',
        topClientTotalHeader: 'Total Ticket',
        taskAllStaff: 'All Staff',
        taskAllStatus: 'All Status',
        taskSearchPlaceholder: 'Search task / staff...',
        thClient: 'Client',
        thStaff: 'Staff',
        thTask: 'Task',
        thTag: 'Tag',
        thEscalatedto: 'Escalated to',
        thStatus: 'Status',
        thDate: 'Date',
        menuTicket: 'Ticket',
        menuTask: 'Task',
        menuMTM: 'Month-to-Month',
        mtmDefaultPeriod: 'This & Last Month',
        mtmOverview: 'Month-to-Month Comparison',
        mtmEmptyText: 'Select a date range to compare months.',
        mtmMonthsCompared: '{count} Months Compared',
        mtmTableTitle: 'Metric Comparison',
        mtmTableSub: 'Side-by-side monthly metrics',
        mtmMetricHeader: 'Metric',
        mtmVolumeTitle: 'Monthly Ticket Volume',
        mtmVolumeSub: 'Issue vs Non-Issue per month',
        mtmPriorityTitle: 'Monthly Priority Distribution',
        mtmPrioritySub: 'Priority distribution per month',
        mtmClosedTitle: 'Monthly Closed',
        mtmClosedSub: 'Number of closed tickets per month',
        mtmIssueTitle: 'Monthly Issue',
        mtmIssueSub: 'Number of issue tickets per month',
        mtmNonIssueTitle: 'Monthly Non Issue',
        mtmNonIssueSub: 'Number of non-issue tickets per month',
        mtmActiveEscTitle: 'Monthly Active Escalation',
        mtmActiveEscSub: 'Number of active escalations per month',
        mtmARTTitle: 'Monthly ART',
        mtmARTSub: 'Average response time per month (minutes)',
        mtmAHTTitle: 'Monthly AHT',
        mtmAHTSub: 'Average handling time per month (minutes)',
        mtmSLATitle: 'Monthly SLA Rate',
        mtmSLASub: 'SLA compliance rate per month',
        mtmTierTitle: 'Monthly Client Tier · Issue vs Non-Issue',
        mtmTierSub: 'Distribution by client segment per month',
        mtmProdTitle: 'Monthly Product · Issue vs Non-Issue',
        mtmProdSub: 'Comparison by product per month',
        mtmStaffTitle: 'Monthly Tickets per Staff',
        mtmStaffSub: 'Number of tickets handled per staff per month',
        mtmTaskStaffTitle: 'Monthly Tasks per Staff',
        mtmTaskStaffSub: 'Number of tasks handled per staff per month',
        mtmFeatTitle: 'Monthly Feature · Issue vs Non-Issue',
        mtmFeatSub: 'Distribution by feature per month',
        mtmShiftTitle: 'Monthly Shift Distribution',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        footer: 'Helpdesk Monitoring Dashboard · Data: Google Sheets · Made with ☕ by Helpdesk Developer Team',
        unassigned: 'Unassigned',
        total: 'total',
        noData: 'No data',
        noTasks: 'No tasks found',
        from: 'of',
        showing: 'Showing',
        active: 'active',
        resolutionRate: 'resolution rate',
        ofTotal: 'of total tickets',
        allData: 'All Data',
        vsPrevPeriod: 'vs prev period',
        vsPrevWeek: 'vs prev week',
        vsPrevHalf: 'vs prev half',
        activeEscalation: 'Active Escalation — {count} unresolved ticket{plural}',
        totalWorkHours: 'Total Task Duration',
        totalTasks: 'Total Tasks',
        inProgress: 'In progress',
        completed: 'completed',
        activeStaff: 'active staff',
        avgResponseTime: 'ART',
        loadingLabel: 'Loading data...',
        loginSubtitle: 'Sign in to continue',
        loginUsernameLabel: 'Username',
        loginPasswordLabel: 'Password',
        loginBtnSubmit: 'Login',
        loginErrorInvalid: 'Invalid username or password.',
        incidentBtnStart: 'Record Incident',
        incidentBtnStop: 'Stop Recording',
        incidentModalTitle: 'Record Incident',
        lblIncidentStart: 'Start',
        lblIncidentEnd: 'End',
        lblIncidentDuration: 'Duration',
        lblIncidentProduct: 'Product',
        lblIncidentProblem: 'Problem',
        lblIncidentRootCause: 'Root Cause',
        incidentSelectProduct: 'Select product',
        incidentFormRequired: 'All fields are required.',
        incidentSaveFailed: 'Failed to save incident. Please try again.',
        incidentCancelBtn: 'Cancel',
        incidentSaveBtn: 'Save',
        incidentSaving: 'Saving...',
        recentIncidentTitle: 'Recent Incidents',
        recentIncidentSub: 'Last 5 incidents by date',
        thIncidentStart: 'Start Time',
        thIncidentEnd: 'End Time',
        thIncidentProduct: 'Product',
        thIncidentProblem: 'Problem',
        thIncidentRootCause: 'Root Cause',
        thIncidentDuration: 'Duration',
        noIncidents: 'No incident data',
    },
};

/* ================================================================
   APPLICATION STATE
   ================================================================ */

const appState = {
    tickets: [],
    tasks: [],
    responseTimes: [],
    incidents: [],
    filteredTickets: [],
    filteredTasks: [],
    filteredResponseTimes: [],
    filters: {
        month: 'all',
        week: 'all',
        dateFrom: '',
        dateTo: '',
        product: 'all',
        tier: 'all',
        shift: 'all',
        staff: 'all',
        taskStaff: 'all',
    },
    mtmFilters: {
        monthFrom: '',
        monthTo: '',
        staff: 'all',
    },
    ui: {
        language: CONFIG.APP.defaultLanguage,
        theme: CONFIG.APP.defaultTheme,
        currentMenu: 'ticket',
        taskPage: 1,
        taskSearch: '',
        taskFilterStaff: 'all',
        taskFilterStatus: 'all',
        dateAutoFilled: false,
        topClientPage: 1,
    },
    charts: {},
    meta: {
        dataSource: 'live',
        lastSync: null,
        isSyncing: false,
        responseTimeStaffCols: [],
    },
};

/* ================================================================
   UTILITY FUNCTIONS
   ================================================================ */

const Utils = {

    Date: {
        parseDate(str) {
            if (!str) return null;
            const parts = str.split('/').map(Number);
            return new Date(parts[2], parts[1] - 1, parts[0]);
        },

        parseDateInput(str) {
            if (!str) return null;
            const parts = str.split('-').map(Number);
            return new Date(parts[0], parts[1] - 1, parts[2]);
        },

        toJakartaParts(isoStr) {
            if (!isoStr) return null;
            const d = new Date(isoStr);
            if (isNaN(d.getTime())) return null;
            const fmt = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Jakarta',
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
            });
            const parts = fmt.formatToParts(d).reduce((acc, p) => {
                acc[p.type] = p.value;
                return acc;
            }, {});
            return {
                year: Number(parts.year),
                month: Number(parts.month),
                day: Number(parts.day),
                hour: Number(parts.hour === '24' ? '0' : parts.hour),
                minute: Number(parts.minute),
                second: Number(parts.second),
            };
        },

        isoToDDMMYYYY(isoStr) {
            const p = Utils.Date.toJakartaParts(isoStr);
            if (!p) return '';
            return String(p.day).padStart(2, '0') + '/' + String(p.month).padStart(2, '0') + '/' + p.year;
        },

        isoToTaskDateString(isoStr) {
            const p = Utils.Date.toJakartaParts(isoStr);
            if (!p) return '';
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const dd = String(p.day).padStart(2, '0');
            const hh = String(p.hour).padStart(2, '0');
            const mi = String(p.minute).padStart(2, '0');
            const ss = String(p.second).padStart(2, '0');
            return dd + '-' + monthNames[p.month - 1] + '-' + p.year + ' ' + hh + ':' + mi + ':' + ss;
        },

        parseTaskDate(str) {
            if (!str) return null;
            const parts = str.split(' ');
            const datePart = parts[0] || '';
            const timePart = parts[1] || '0:0:0';
            const dParts = datePart.split('-');
            const tParts = timePart.split(':').map(Number);
            const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return new Date(Number(dParts[2]), monthMap[dParts[1]], Number(dParts[0]), tParts[0] || 0, tParts[1] || 0, tParts[2] || 0);
        },

        taskDateOnly(str) {
            const dt = Utils.Date.parseTaskDate(str);
            return dt ? new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()) : null;
        },

        formatTime(date) {
            if (!date) return '';
            const h = String(date.getHours()).padStart(2, '0');
            const m = String(date.getMinutes()).padStart(2, '0');
            return h + ':' + m;
        },

        formatTaskDate(str) {
            if (!str) return '';
            const parts = str.split(' ');
            const datePart = parts[0] || '';
            if (!datePart) return '';
            const dParts = datePart.split('-');
            const monthMap = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '04', Jun: '05',
                Jul: '06', Aug: '07', Sep: '08', Oct: '09', Nov: '10', Dec: '11' };
            const monthNum = monthMap[dParts[1]] || dParts[1];
            const day = String(Number(dParts[0])).padStart(2, '0');
            return day + '/' + monthNum + '/' + dParts[2];
        },
    },

    String: {
        truncate(str, maxLen) {
            if (!str || str.length <= maxLen) return str || '';
            return str.slice(0, maxLen) + '…';
        },

        getInitials(name) {
            if (!name) return '?';
            return name.split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map(w => w[0])
                .join('')
                .toUpperCase();
        },

        capitalize(str) {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        },

        escapeHtml(str) {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        },

        formatTier(tier) {
            if (!tier) return '';
            return tier.replace(/^Tier(\d+)$/, 'Tier $1');
        },

        sanitizePlaceholderDate(str) {
            if (!str) return '';
            return /1899|1900/.test(str) ? '' : str;
        },
    },

    Math: {
        sum(arr) { return arr.reduce((a, b) => a + b, 0); },
        average(arr) { return arr.length ? Utils.Math.sum(arr) / arr.length : 0; },
        percentage(part, total) { return total > 0 ? (part / total) * 100 : 0; },
        clamp(val, min, max) { return Math.min(Math.max(val, min), max); },
        round(val, decimals) { return Number(val.toFixed(decimals)); },
    },

    Array: {
        distinct(arr) { return [...new Set(arr)]; },
        groupBy(arr, key) {
            return arr.reduce((acc, item) => {
                const k = item[key] || 'unknown';
                if (!acc[k]) acc[k] = [];
                acc[k].push(item);
                return acc;
            }, {});
        },
        sortBy(arr, key, asc = true) {
            return [...arr].sort((a, b) => {
                const va = a[key] || '';
                const vb = b[key] || '';
                return asc ? va.localeCompare(vb) : vb.localeCompare(va);
            });
        },
        paginate(arr, page, size) {
            const start = (page - 1) * size;
            return arr.slice(start, start + size);
        },
        totalPages(arr, size) { return Math.max(1, Math.ceil(arr.length / size)); },
    },

    Duration: {
        parse(str) {
            if (!str) return 0;
            const isIso = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
            if (isIso) {
                const p = Utils.Date.toJakartaParts(str);
                if (!p) return 0;
                return p.hour * 60 + p.minute + (p.second || 0) / 60;
            }
            const parts = str.split(':').map(Number);
            if (parts.some(isNaN)) return 0;
            return parts[0] * 60 + parts[1] + (parts[2] || 0) / 60;
        },

        parseTimeToSeconds(str) {
            if (!str) return null;
            const isIso = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
            if (isIso) {
                const p = Utils.Date.toJakartaParts(str);
                if (!p) return null;
                return p.hour * 3600 + p.minute * 60 + (p.second || 0);
            }
            const parts = str.split(':').map(Number);
            if (parts.length < 2 || parts.some(isNaN)) return null;
            return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
        },

        format(minutes) {
            if (minutes < 60) return minutes.toFixed(1) + 'm';
            return (minutes / 60).toFixed(1) + 'h';
        },

        formatHMS(totalMinutes) {
            const totalSeconds = Math.round((totalMinutes || 0) * 60);
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            return h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        },

        formatAHT(totalMinutes) {
            const totalSeconds = Math.max(0, Math.round((totalMinutes || 0) * 60));
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            const hh = String(h).padStart(2, '0');
            const mm = String(m).padStart(2, '0');
            const ss = String(s).padStart(2, '0');
            return hh + '.' + mm + '.' + ss;
        },

        sum(items, key) {
            return items.reduce((acc, item) => acc + Utils.Duration.parse(item[key] || ''), 0);
        },
    },

    Color: {
        toRGBA(hex, alpha) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
        },
    },

    CSV: {
        escapeField(val) {
            if (val === null || val === undefined) return '';
            val = String(val);
            if (/[",\n\r]/.test(val)) {
                val = '"' + val.replace(/"/g, '""') + '"';
            }
            return val;
        },
        rowsToCSV(rows) {
            return rows.map(row => (row || []).map(Utils.CSV.escapeField).join(',')).join('\r\n');
        },
    },

    File: {
        download(content, filename, mime) {
            const blob = new Blob([content], { type: mime });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        },
    },

    DOM: {
        get(id) { return document.getElementById(id); },
        qs(sel, ctx) { return (ctx || document).querySelector(sel); },
        qsa(sel, ctx) { return (ctx || document).querySelectorAll(sel); },
        create(tag, cls, html) {
            const el = document.createElement(tag);
            if (cls) el.className = cls;
            if (html) el.innerHTML = html;
            return el;
        },
    },

    debounce(fn, delay) {
        let timer = null;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(null, args), delay);
        };
    },

    uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2); },
};

/* ================================================================
   TRANSLATION
   ================================================================ */

function t(key, params) {
    const lang = appState.ui.language;
    const translations = LOCALE[lang] || LOCALE.id;
    let text = translations[key] || key;

    if (params) {
        Object.keys(params).forEach(k => {
            text = text.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
        });
    }

    return text;
}

function getLang() {
    return appState.ui.language;
}

/* ================================================================
   THEME
   ================================================================ */

function getTheme() {
    return appState.ui.theme;
}

function toggleTheme() {
    const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
    appState.ui.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById('btnTheme').textContent = newTheme === 'dark' ? '🌙' : '☀️';
    return newTheme;
}

function isDark() {
    return getTheme() === 'dark';
}

function getGridColor() {
    return isDark() ? 'rgba(36,40,64,.9)' : 'rgba(226,232,240,.9)';
}

function getTickColor() {
    return isDark() ? '#475569' : '#94a3b8';
}

function getTextColor() {
    return isDark() ? '#e2e8f0' : '#0f172a';
}

function getSurfaceColor() {
    return isDark() ? '#111318' : '#ffffff';
}

/* ================================================================
   DATA LOADER
   ================================================================ */

const DataLoader = {

    fetchJSON(url) {
        const bust = (url.indexOf('?') !== -1 ? '&' : '?') + '_t=' + Date.now();
        return fetch(url + bust, { cache: 'no-store' })
            .then(response => {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then(json => {
                if (!json || json.success === false || !Array.isArray(json.data)) {
                    throw new Error('Invalid API response shape');
                }
                return json.data;
            });
    },

    getField(obj, ...names) {
        const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
        for (let i = 0; i < names.length; i++) {
            const n = names[i];
            if (obj[n] !== undefined && obj[n] !== null && obj[n] !== '') {
                return String(obj[n]).trim();
            }
        }
        const keys = Object.keys(obj);
        for (let j = 0; j < names.length; j++) {
            const target = normalize(names[j]);
            let found = null;
            for (let k = 0; k < keys.length; k++) {
                if (normalize(keys[k]) === target) {
                    found = keys[k];
                    break;
                }
            }
            if (found && obj[found] !== undefined && obj[found] !== null && obj[found] !== '') {
                return String(obj[found]).trim();
            }
        }
        return '';
    },

    mapTicketRows(records) {
        const out = [];
        (records || []).forEach(rec => {
            const rawDate = DataLoader.getField(rec, 'Ticket Date', 'Date');
            if (!rawDate) return;

            const dateParts = Utils.Date.toJakartaParts(rawDate);
            const rawMonth = DataLoader.getField(rec, 'Month').replace(/\[\d+\]\s*/, '').trim();
            const monthWithYear = dateParts ? (rawMonth + ' - ' + dateParts.year) : rawMonth;

            out.push({
                date: Utils.Date.isoToDDMMYYYY(rawDate),
                day: DataLoader.getField(rec, 'Day'),
                month: monthWithYear,
                week: DataLoader.getField(rec, 'Week'),
                product: DataLoader.getField(rec, 'Product'),
                type: DataLoader.getField(rec, 'Type'),
                esc: DataLoader.normalizeYesNo(DataLoader.getField(rec, 'Escalation Status', 'Escalation')),
                status: DataLoader.getField(rec, 'Status'),
                priority: DataLoader.getField(rec, 'Priority'),
                feature: DataLoader.getField(rec, 'Feature'),
                shift: DataLoader.getField(rec, 'Shift'),
                tier: DataLoader.getField(rec, 'Client Category', 'Tier'),
                onSLA: DataLoader.normalizeYesNo(DataLoader.getField(rec, 'On SLA?', 'On SLA', 'OnSLA')),
                ht: DataLoader.getField(rec, 'Handling Time'),
                client: DataLoader.getField(rec, 'Client Name'),
                problem: DataLoader.getField(rec, 'Problem'),
                startTime: DataLoader.getField(rec, 'Start Time'),
                solvedTime: DataLoader.getField(rec, 'Solved/Escalated Time', 'Solved Time'),
                staff: DataLoader.getField(rec, 'Created by', 'Staff'),
                escalatedTo: DataLoader.getField(rec, 'Escalated to'),
                ticketCRM: DataLoader.getField(rec, 'Tiket CRM', 'Ticket CRM'),
                ticketSociomile: DataLoader.getField(rec, 'Tiket Sociomile', 'Ticket Sociomile'),
            });
        });
        return out;
    },

    mapTaskRows(records) {
        const out = [];
        (records || []).forEach(rec => {
            const staff = DataLoader.getField(rec, 'Staff Member', 'Staff');
            const task = DataLoader.getField(rec, 'Task');
            if (!staff && !task) return;

            const rawStart = DataLoader.getField(rec, 'Start Time');
            const startParts = Utils.Date.toJakartaParts(rawStart);
            const rawMonth = DataLoader.getField(rec, 'Month').replace(/\[\d+\]\s*/, '').trim();
            const monthWithYear = startParts ? (rawMonth + ' - ' + startParts.year) : rawMonth;

            out.push({
                staff,
                task,
                month: monthWithYear,
                week: DataLoader.getField(rec, 'Week'),
                start: Utils.Date.isoToTaskDateString(rawStart),
                end: DataLoader.getField(rec, 'End Time'),
                note: DataLoader.getField(rec, 'Note'),
                duration: DataLoader.getField(rec, 'Duration'),
                status: DataLoader.getField(rec, 'Status'),
            });
        });
        return out;
    },

    getResponseTimeStaffCols(records) {
        if (!records || !records.length) return [];
        const fixedCols = ['Date', 'Day', 'Month', 'Week', 'Average'];
        return Object.keys(records[0]).filter(k => fixedCols.indexOf(k) === -1);
    },

    mapResponseTimeRows(records) {
        const out = [];
        if (!records || !records.length) return out;
        const staffCols = DataLoader.getResponseTimeStaffCols(records);

        records.forEach(rec => {
            const rawDate = DataLoader.getField(rec, 'Date');
            if (!rawDate) return;

            const staffValues = {};
            staffCols.forEach(name => {
                const raw = rec[name];
                staffValues[name] = (raw !== undefined && raw !== null && raw !== '') ? Utils.Duration.parse(raw) : null;
            });

            const dateParts = Utils.Date.toJakartaParts(rawDate);
            const rawMonth = DataLoader.getField(rec, 'Month').replace(/\[\d+\]\s*/, '').trim();
            const monthWithYear = dateParts ? (rawMonth + ' - ' + dateParts.year) : rawMonth;

            out.push({
                date: Utils.Date.isoToDDMMYYYY(rawDate),
                day: DataLoader.getField(rec, 'Day'),
                month: monthWithYear,
                week: DataLoader.getField(rec, 'Week'),
                average: (rec['Average'] !== undefined && rec['Average'] !== null && rec['Average'] !== '') ? Utils.Duration.parse(rec['Average']) : null,
                staffValues,
            });
        });
        return out;
    },

    mapIncidentRows(records) {
        const out = [];
        (records || []).forEach(rec => {
            const rawStart = DataLoader.getField(rec, 'Start Time', 'StartTime');
            if (!rawStart) return;

            const rawEnd = DataLoader.getField(rec, 'End Time', 'EndTime');
            let durationMinutes = null;
            if (rawStart && rawEnd) {
                const d1 = new Date(rawStart);
                const d2 = new Date(rawEnd);
                if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
                    durationMinutes = (d2.getTime() - d1.getTime()) / 60000;
                }
            }

            out.push({
                startTimeRaw: rawStart,
                startTime: Utils.Date.isoToTaskDateString(rawStart),
                endTimeRaw: rawEnd,
                endTime: rawEnd ? Utils.Date.isoToTaskDateString(rawEnd) : '',
                product: DataLoader.getField(rec, 'Product'),
                problem: DataLoader.getField(rec, 'Problem'),
                rootCause: DataLoader.getField(rec, 'Root Cause', 'RootCause'),
                durationMinutes,
            });
        });
        return out;
    },

    normalizeYesNo(value) {
        const s = (value || '').trim().toLowerCase().replace(/\s+/g, '');
        if (['yes', 'y', 'onsla', 'true', '1', 'escalated'].indexOf(s) !== -1) return 'Yes';
        if (['no', 'n', 'offsla', 'false', '0'].indexOf(s) !== -1) return 'No';
        return value || '';
    },

    load() {
        if (window.location.protocol === 'file:') {
            console.warn('File protocol detected, cannot fetch data');
            appState.tickets = [];
            appState.tasks = [];
            appState.incidents = [];
            appState.meta.dataSource = 'error';
            appState.meta.lastSync = new Date();
            return Promise.resolve(false);
        }

        const rtPromise = DataLoader.fetchJSON(CONFIG.API.responseTime).catch(() => {
            console.warn('Failed to load Response Time data');
            return [];
        });

        const incidentsPromise = DataLoader.fetchJSON(CONFIG.API.incidents).catch(() => {
            console.warn('Failed to load Incident data');
            return [];
        });

        return Promise.all([
            DataLoader.fetchJSON(CONFIG.API.tickets),
            DataLoader.fetchJSON(CONFIG.API.tasks),
            rtPromise,
            incidentsPromise,
        ]).then(results => {
            const ticketRecords = results[0];
            const taskRecords = results[1];
            const rtRecords = results[2];
            const incidentRecords = results[3];
            const mappedTickets = DataLoader.mapTicketRows(ticketRecords);
            const mappedTasks = DataLoader.mapTaskRows(taskRecords);
            const mappedRT = DataLoader.mapResponseTimeRows(rtRecords);
            const mappedIncidents = DataLoader.mapIncidentRows(incidentRecords);

            if (mappedTickets.length === 0 && mappedTasks.length === 0) {
                throw new Error('Empty dataset from API');
            }

            appState.tickets = mappedTickets;
            appState.tasks = mappedTasks;
            appState.responseTimes = mappedRT;
            appState.incidents = mappedIncidents;
            appState.meta.responseTimeStaffCols = DataLoader.getResponseTimeStaffCols(rtRecords);
            appState.meta.dataSource = 'live';
            appState.meta.lastSync = new Date();
            return true;
        }).catch(err => {
            console.error('Failed to load data from API:', err);
            appState.tickets = [];
            appState.tasks = [];
            appState.responseTimes = [];
            appState.incidents = [];
            appState.meta.dataSource = 'error';
            appState.meta.lastSync = new Date();
            return false;
        });
    }
};

/* ================================================================
   DATA PROCESSOR
   ================================================================ */

const DataProcessor = {

    calculateKPIs(data) {
        const total = data.length;
        const closed = data.filter(r => r.status === 'Closed').length;
        const issue = data.filter(r => r.type === 'Issue').length;
        const nonIssue = data.filter(r => r.type === 'Non Issue').length;
        const activeEsc = data.filter(r => r.esc === 'Yes' && r.status !== 'Closed').length;
        const onSLA = data.filter(r => r.onSLA === 'Yes').length;
        const slaRate = total > 0 ? (onSLA / total) * 100 : 0;

        const htEntries = data.filter(r => r.ht && Utils.Duration.parse(r.ht) >= 0);
        const totalMinutes = htEntries.reduce((acc, r) => acc + Utils.Duration.parse(r.ht), 0);
        const aht = htEntries.length > 0 ? totalMinutes / htEntries.length : 0;

        return { total, closed, issue, nonIssue, activeEsc, slaRate, aht };
    },

    calculateFCRRate(data) {
        const total = data.length;
        const noEscalation = data.filter(r => r.esc === 'No').length;
        return total > 0 ? (noEscalation / total) * 100 : 0;
    },

    calculateEscalationStats(data) {
        const esc = data.filter(r => r.esc === 'Yes');
        const total = esc.length;
        const active = esc.filter(r => r.status !== 'Closed').length;
        const closed = esc.filter(r => r.status === 'Closed').length;
        const rate = data.length > 0 ? (total / data.length) * 100 : 0;

        const products = Utils.Array.distinct(data.map(r => r.product)).sort();
        const byProduct = products.map(p => ({
            name: p,
            label: p.replace('Sociomile ', 'SM '),
            total: esc.filter(r => r.product === p).length,
            active: esc.filter(r => r.product === p && r.status !== 'Closed').length,
        })).filter(x => x.total > 0);

        const tierSet = Utils.Array.distinct(data.map(r => r.tier).filter(Boolean)).sort();
        const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        const byTier = tierSet.map((t, i) => ({
            name: t,
            label: t,
            total: esc.filter(r => r.tier === t).length,
            active: esc.filter(r => r.tier === t && r.status !== 'Closed').length,
            color: CONFIG.CHART.colors[t] || palette[i % palette.length],
        })).filter(x => x.total > 0);

        const byType = [
            { name: t('issue'), key: 'Issue', total: esc.filter(r => r.type === 'Issue').length, active: esc.filter(r => r.type === 'Issue' && r.status !== 'Closed').length, color: CONFIG.CHART.colors.issue },
            { name: t('nonIssue'), key: 'Non Issue', total: esc.filter(r => r.type === 'Non Issue').length, active: esc.filter(r => r.type === 'Non Issue' && r.status !== 'Closed').length, color: CONFIG.CHART.colors.non },
        ].filter(x => x.total > 0);

        const activeRows = active > 0 ? esc
            .filter(r => r.status !== 'Closed')
            .map(r => {
                const priColor = CONFIG.CHART.colors[r.priority] || CONFIG.CHART.colors.Low;
                const prodColor = CONFIG.CHART.colors[r.product] || CONFIG.CHART.colors.Tier1;
                const prodShort = r.product.replace('Sociomile ', 'SM ');
                const clientFull = r.client || '-';
                const clientMatch = clientFull.match(/^([^(]+)/);
                const clientShort = clientMatch ? clientMatch[1].trim() : clientFull;
                const compMatch = clientFull.match(/\(([^)]+)\)/);
                const company = compMatch ? compMatch[1] : '';

                return {
                    client: Utils.String.escapeHtml(clientShort),
                    company: Utils.String.escapeHtml(company),
                    problem: Utils.String.escapeHtml(r.problem || '-'),
                    product: prodShort,
                    productColor: prodColor,
                    priority: r.priority,
                    priorityColor: priColor,
                    date: Utils.String.sanitizePlaceholderDate(r.date),
                    startTime: Utils.String.sanitizePlaceholderDate(r.startTime),
                    shift: r.shift,
                    escalatedTo: Utils.String.escapeHtml(r.escalatedTo || '-'),
                };
            }) : [];

        return { total, active, closed, rate, byProduct, byTier, byType, activeRows };
    },

    calculateTaskMetrics(data) {
        const total = data.length;
        const done = data.filter(t => t.status === 'Done').length;
        const progress = data.filter(t => t.status === 'Progress').length;
        const totalMinutes = data.reduce((acc, t) => acc + Utils.Duration.parse(t.duration), 0);
        const staffCount = new Set(data.map(t => t.staff)).size;
        return { total, done, progress, totalMinutes, staffCount };
    },

    getPreviousPeriodData(data, filters) {
        const { month, week, dateFrom, dateTo, product, tier, shift, staff } = filters;

        const applyDim = rows => rows.filter(r =>
            (product === 'all' || r.product === product) &&
            (tier === 'all' || r.tier === tier) &&
            (shift === 'all' || r.shift === shift) &&
            (staff === 'all' || r.staff === staff)
        );

        if (dateFrom || dateTo) {
            const parseLocal = s => {
                const parts = s.split('-').map(Number);
                return new Date(parts[0], parts[1] - 1, parts[2]);
            };
            let from = dateFrom ? parseLocal(dateFrom) : null;
            let to = dateTo ? parseLocal(dateTo) : null;
            if (to) to.setHours(23, 59, 59, 999);

            if (!from || !to) {
                const dates = Utils.Array.distinct(data.map(r => r.date))
                    .map(Utils.Date.parseDate).filter(Boolean).sort((a, b) => a - b);
                if (dates.length === 0) return [];
                if (!from) from = dates[0];
                if (!to) { to = new Date(dates[dates.length - 1]);
                    to.setHours(23, 59, 59, 999); }
            }

            const duration = to.getTime() - from.getTime() + 1;
            const prevTo = new Date(from.getTime() - 1);
            const prevFrom = new Date(from.getTime() - duration);

            return applyDim(data.filter(r => {
                const rd = Utils.Date.parseDate(r.date);
                return rd && rd >= prevFrom && rd <= prevTo;
            }));
        }

        if (week !== 'all') {
            const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
            const idx = weeks.indexOf(week);
            const prevWeek = idx > 0 ? weeks[idx - 1] : null;
            if (!prevWeek) return [];
            return applyDim(data.filter(r => r.week === prevWeek && (month === 'all' || r.month === month)));
        }

        const allDates = Utils.Array.distinct(data.map(r => r.date))
            .sort((a, b) => Utils.Date.parseDate(a) - Utils.Date.parseDate(b));
        if (allDates.length < 2) return [];
        const half = Math.ceil(allDates.length / 2);
        const prevSet = new Set(allDates.slice(0, half));
        return applyDim(data.filter(r => prevSet.has(r.date)));
    },

    preparePriorityData(data) {
        const labels = CONFIG.PRIORITIES;
        const values = labels.map(p => data.filter(r => r.priority === p).length);
        const colors = labels.map(p => CONFIG.CHART.colors[p]);
        return { labels, values, colors };
    },

    prepareTierData(data) {
        const tiers = Utils.Array.distinct(data.map(r => r.tier).filter(Boolean)).sort();
        if (tiers.length === 0) {
            return { labels: [], rawTiers: [], issue: [], nonIssue: [], totals: [] };
        }

        const labels = tiers.map(t => Utils.String.formatTier(t));
        const issue = tiers.map(t => data.filter(r => r.tier === t && r.type === 'Issue').length);
        const nonIssue = tiers.map(t => data.filter(r => r.tier === t && r.type === 'Non Issue').length);
        const totals = tiers.map(t => data.filter(r => r.tier === t).length);

        return { labels, rawTiers: tiers, issue, nonIssue, totals };
    },

    prepareProductData(data) {
        const products = Utils.Array.distinct(data.map(r => r.product)).sort();
        const labels = products.map(p => p.replace('Sociomile ', 'SM '));
        const issue = products.map(p => data.filter(r => r.product === p && r.type === 'Issue').length);
        const nonIssue = products.map(p => data.filter(r => r.product === p && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    prepareFeatureData(data) {
        const features = Utils.Array.distinct(data.map(r => r.feature || 'Lainnya'));
        const labels = features;
        const issue = features.map(f => data.filter(r => (r.feature || 'Lainnya') === f && r.type === 'Issue').length);
        const nonIssue = features.map(f => data.filter(r => (r.feature || 'Lainnya') === f && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    prepareStaffData(data) {
        const unassignedLabel = t('unassigned');
        const staffs = Utils.Array.distinct(data.map(r => r.staff || unassignedLabel)).sort();
        const counts = staffs.map(s => data.filter(r => (r.staff || unassignedLabel) === s).length);
        const combined = staffs.map((s, i) => ({ label: s, count: counts[i] }))
            .filter(x => x.count > 0)
            .sort((a, b) => b.count - a.count);
        return {
            labels: combined.map(x => x.label.split(' ').slice(0, 2).join(' ')),
            values: combined.map(x => x.count),
        };
    },

    prepareTrendData(data) {
        const allDates = Utils.Array.distinct(data.map(r => r.date))
            .sort((a, b) => Utils.Date.parseDate(a) - Utils.Date.parseDate(b));
        const last7 = allDates.slice(-7);
        const days = t('days');
        const labels = last7.map(dt => {
            const parts = dt.split('/').map(Number);
            const dayName = days[new Date(parts[2], parts[1] - 1, parts[0]).getDay()];
            return dayName + ' ' + String(parts[0]).padStart(2, '0') + '/' + String(parts[1]).padStart(2, '0');
        });
        const issue = last7.map(dt => data.filter(r => r.date === dt && r.type === 'Issue').length);
        const nonIssue = last7.map(dt => data.filter(r => r.date === dt && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    prepare6MonthTrendData(data) {
        const sortedMonths = Utils.Array.distinct(data.map(r => r.month))
            .filter(Boolean)
            .sort((a, b) => UIRenderer._monthSortValue(a) - UIRenderer._monthSortValue(b));
        const last6 = sortedMonths.slice(-6);
        const labels = last6.map(m => m.replace(/\[\d+\]\s*/, '').trim());
        const issue = last6.map(m => data.filter(r => r.month === m && r.type === 'Issue').length);
        const nonIssue = last6.map(m => data.filter(r => r.month === m && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    prepareShiftData(data) {
        const shifts = ['Pagi', 'Siang', 'Malam'];
        const labels = [t('morning'), t('day'), t('night')];
        const issue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Issue').length);
        const nonIssue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Non Issue').length);
        const totals = shifts.map(s => data.filter(r => r.shift === s).length);
        return { labels, issue, nonIssue, totals };
    },

    prepareTopClientIssueData(data) {
        const issues = data.filter(r => r.type === 'Issue' && r.client);
        const groups = {};
        issues.forEach(r => {
            const clientName = (r.client || '').trim();
            if (!clientName) return;

            const problemText = (r.problem || '').trim();
            const problemPrefix = problemText.split(' - ')[0].trim();

            const name = problemPrefix ? clientName + ' - ' + problemPrefix : clientName;

            if (!groups[name]) {
                groups[name] = { name, count: 0, problems: [] };
            }
            groups[name].count++;
            groups[name].problems.push({
                problem: r.problem,
                date: r.date,
                priority: r.priority,
                product: r.product,
                staff: r.staff,
                ticketCRM: r.ticketCRM,
                ticketSociomile: r.ticketSociomile,
            });
        });
        const arr = Object.keys(groups).map(k => groups[k]);
        arr.sort((a, b) => b.count - a.count);
        return arr;
    },

    getStaffList(data) {
        return Utils.Array.distinct(data.map(r => r.staff).filter(Boolean)).sort();
    },

    prepareMonthlyComparison(tickets, monthFrom, monthTo, responseTimes, tasks, staffFilter) {
        if (!monthFrom || !monthTo) return null;
        staffFilter = staffFilter || 'all';

        const sorted = Utils.Array.distinct(tickets.map(r => r.month))
            .filter(Boolean)
            .sort((a, b) => UIRenderer._monthSortValue(a) - UIRenderer._monthSortValue(b));

        let fromIdx = sorted.indexOf(monthFrom);
        let toIdx = sorted.indexOf(monthTo);
        if (fromIdx === -1 || toIdx === -1) return null;
        if (fromIdx > toIdx) {
            const tmp = fromIdx;
            fromIdx = toIdx;
            toIdx = tmp;
        }

        const selectedMonths = sorted.slice(fromIdx, toIdx + 1);
        if (selectedMonths.length === 0) return null;

        const inRange = tickets.filter(r => selectedMonths.indexOf(r.month) !== -1 && (staffFilter === 'all' || r.staff === staffFilter));
        const taskData = (tasks || []).filter(tk => staffFilter === 'all' || tk.staff === staffFilter);

        const rtData = responseTimes || [];
        const buckets = selectedMonths.map(m => {
            const rows = tickets.filter(r => r.month === m && (staffFilter === 'all' || r.staff === staffFilter));
            const taskRows = taskData.filter(tk => tk.month === m);
            const kpi = DataProcessor.calculateKPIs(rows);
            const artResult = DataProcessor.calculateART(rtData.filter(r => r.month === m), staffFilter, appState.meta.responseTimeStaffCols);
            kpi.artMinutes = artResult.avgMinutes;
            kpi.artCount = artResult.count;
            kpi.totalTasks = taskRows.length;
            kpi.fcrRate = DataProcessor.calculateFCRRate(rows);
            return {
                key: m,
                label: m.replace(/\[\d+\]\s*/, '').trim(),
                rows,
                taskRows,
                kpi,
                priority: DataProcessor.preparePriorityData(rows),
            };
        });

        return { buckets, totalRecords: inRange.length, allRows: inRange };
    },

    prepareMonthlyTierComparison(buckets) {
        const allRows = buckets.reduce((acc, b) => acc.concat(b.rows), []);
        const tiers = Utils.Array.distinct(allRows.map(r => r.tier).filter(Boolean)).sort();
        const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        const datasets = tiers.map((tier, i) => ({
            label: Utils.String.formatTier(tier),
            data: buckets.map(b => b.rows.filter(r => r.tier === tier).length),
            color: CONFIG.CHART.colors[tier] || palette[i % palette.length],
        }));
        return { labels: buckets.map(b => b.label), datasets };
    },

    prepareMonthlyProductComparison(buckets) {
        const allRows = buckets.reduce((acc, b) => acc.concat(b.rows), []);
        const products = Utils.Array.distinct(allRows.map(r => r.product)).sort();
        const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
        const datasets = products.map((p, i) => ({
            label: p.replace('Sociomile ', 'SM '),
            data: buckets.map(b => b.rows.filter(r => r.product === p).length),
            color: CONFIG.CHART.colors[p] || palette[i % palette.length],
        }));
        return { labels: buckets.map(b => b.label), datasets };
    },

    prepareMonthlyStaffComparison(buckets) {
        const unassignedLabel = t('unassigned');
        const allRows = buckets.reduce((acc, b) => acc.concat(b.rows), []);
        const staffs = Utils.Array.distinct(allRows.map(r => r.staff || unassignedLabel)).sort();
        const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
        const datasets = staffs.map((s, i) => ({
            label: s.split(' ').slice(0, 2).join(' '),
            data: buckets.map(b => b.rows.filter(r => (r.staff || unassignedLabel) === s).length),
            color: palette[i % palette.length],
        }));
        return { labels: buckets.map(b => b.label), datasets };
    },

    prepareMonthlyTaskStaffComparison(buckets) {
        const unassignedLabel = t('unassigned');
        const allRows = buckets.reduce((acc, b) => acc.concat(b.taskRows || []), []);
        const staffs = Utils.Array.distinct(allRows.map(tk => tk.staff || unassignedLabel)).sort();
        const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
        const datasets = staffs.map((s, i) => ({
            label: s.split(' ').slice(0, 2).join(' '),
            data: buckets.map(b => (b.taskRows || []).filter(tk => (tk.staff || unassignedLabel) === s).length),
            color: palette[i % palette.length],
        }));
        return { labels: buckets.map(b => b.label), datasets };
    },

    prepareMonthlyFeatureComparison(buckets) {
        const allRows = buckets.reduce((acc, b) => acc.concat(b.rows), []);
        const features = Utils.Array.distinct(allRows.map(r => r.feature || 'Lainnya'));
        const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
        const datasets = features.map((f, i) => ({
            label: f,
            data: buckets.map(b => b.rows.filter(r => (r.feature || 'Lainnya') === f).length),
            color: palette[i % palette.length],
        }));
        return { labels: buckets.map(b => b.label), datasets };
    },

    prepareMonthlyShiftComparison(buckets) {
        const shifts = ['Pagi', 'Siang', 'Malam'];
        const shiftLabelMap = { Pagi: t('morning'), Siang: t('day'), Malam: t('night') };
        const datasets = shifts.map(s => ({
            label: shiftLabelMap[s],
            data: buckets.map(b => b.rows.filter(r => r.shift === s).length),
            color: CONFIG.CHART.colors[s],
        }));
        return { labels: buckets.map(b => b.label), datasets };
    },

    matchStaffColumn(staffCols, staffName) {
        if (!staffName || !staffCols || !staffCols.length) return null;
        const normalize = s => s.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
        const target = normalize(staffName);
        const firstToken = staffName.trim().split(' ')[0].toLowerCase();

        for (let i = 0; i < staffCols.length; i++) {
            if (normalize(staffCols[i]) === target) return staffCols[i];
        }
        for (let j = 0; j < staffCols.length; j++) {
            if (staffCols[j].toLowerCase() === firstToken) return staffCols[j];
        }
        return null;
    },

    calculateART(rows, staffFilter, staffCols) {
        rows = rows || [];
        const isStaffFiltered = !!(staffFilter && staffFilter !== 'all');
        const matchedCol = isStaffFiltered ? DataProcessor.matchStaffColumn(staffCols, staffFilter) : null;

        if (isStaffFiltered && !matchedCol) {
            return { avgMinutes: 0, count: 0 };
        }

        const values = [];
        rows.forEach(r => {
            if (matchedCol) {
                const v = r.staffValues ? r.staffValues[matchedCol] : null;
                if (v !== null && v !== undefined && !isNaN(v)) values.push(v);
                return;
            }

            const cols = staffCols || [];
            let addedAny = false;
            cols.forEach(col => {
                const vv = r.staffValues ? r.staffValues[col] : null;
                if (vv !== null && vv !== undefined && !isNaN(vv)) {
                    values.push(vv);
                    addedAny = true;
                }
            });

            if (!addedAny && r.average !== null && r.average !== undefined && !isNaN(r.average)) {
                values.push(r.average);
            }
        });
        return { avgMinutes: values.length ? Utils.Math.average(values) : 0, count: values.length };
    },

    calculateAverageResponseTime(data) {
        let totalSeconds = 0;
        let count = 0;

        data.forEach(r => {
            const start = Utils.Duration.parseTimeToSeconds(r.startTime);
            const solved = Utils.Duration.parseTimeToSeconds(r.solvedTime);
            if (start === null || solved === null) return;

            let diff = solved - start;
            if (diff < 0) diff += 24 * 3600;
            totalSeconds += diff;
            count++;
        });

        const avgSeconds = count > 0 ? totalSeconds / count : 0;
        const minutes = Math.floor(avgSeconds / 60);
        const seconds = Math.round(avgSeconds % 60);

        return {
            avgSeconds,
            formatted: minutes > 0 ? minutes + 'm ' + seconds + 's' : seconds + 's',
            count,
            totalSeconds
        };
    },
};

/* ================================================================
   FILTER ENGINE
   ================================================================ */

const FilterEngine = {

    applyTicketFilters(data, filters) {
        const { month, week, dateFrom, dateTo, product, tier, shift, staff } = filters;

        return data.filter(r => {
            if (month !== 'all' && r.month !== month) return false;
            if (week !== 'all' && r.week !== week) return false;

            if (dateFrom || dateTo) {
                const rd = Utils.Date.parseDate(r.date);
                if (!rd) return false;
                if (dateFrom) {
                    const from = Utils.Date.parseDateInput(dateFrom);
                    if (from && rd < from) return false;
                }
                if (dateTo) {
                    const to = Utils.Date.parseDateInput(dateTo);
                    if (to) {
                        const toEnd = new Date(to);
                        toEnd.setHours(23, 59, 59, 999);
                        if (rd > toEnd) return false;
                    }
                }
            }

            if (product !== 'all' && r.product !== product) return false;
            if (tier !== 'all' && r.tier !== tier) return false;
            if (shift !== 'all' && r.shift !== shift) return false;
            if (staff !== 'all' && r.staff !== staff) return false;

            return true;
        });
    },

    applyTaskFilters(data, filters) {
        const { month, week, dateFrom, dateTo, taskStaff } = filters;

        return data.filter(t => {
            if (month !== 'all' && t.month !== month) return false;
            if (week !== 'all' && t.week !== week) return false;
            if (taskStaff && taskStaff !== 'all' && t.staff !== taskStaff) return false;

            if (dateFrom || dateTo) {
                const td = Utils.Date.taskDateOnly(t.start);
                if (!td) return false;
                if (dateFrom) {
                    const from = Utils.Date.parseDateInput(dateFrom);
                    if (from && td < from) return false;
                }
                if (dateTo) {
                    const to = Utils.Date.parseDateInput(dateTo);
                    if (to) {
                        const toEnd = new Date(to);
                        toEnd.setHours(23, 59, 59, 999);
                        if (td > toEnd) return false;
                    }
                }
            }

            return true;
        });
    },

    getPreviousTaskData(data, filters) {
        const { month, week, dateFrom, dateTo, taskStaff } = filters;

        const applyDim = rows => rows.filter(t =>
            (!taskStaff || taskStaff === 'all' || t.staff === taskStaff)
        );

        if (dateFrom || dateTo) {
            const parseLocal = s => {
                const parts = s.split('-').map(Number);
                return new Date(parts[0], parts[1] - 1, parts[2]);
            };
            let from = dateFrom ? parseLocal(dateFrom) : null;
            let to = dateTo ? parseLocal(dateTo) : null;
            if (to) to.setHours(23, 59, 59, 999);

            if (!from || !to) {
                const dates = data.map(t => t.start).map(Utils.Date.taskDateOnly).filter(Boolean).sort((a, b) => a - b);
                if (dates.length === 0) return [];
                if (!from) from = dates[0];
                if (!to) { to = new Date(dates[dates.length - 1]);
                    to.setHours(23, 59, 59, 999); }
            }

            const duration = to.getTime() - from.getTime() + 1;
            const prevTo = new Date(from.getTime() - 1);
            const prevFrom = new Date(from.getTime() - duration);

            return applyDim(data.filter(t => {
                const td = Utils.Date.taskDateOnly(t.start);
                return td && td >= prevFrom && td <= prevTo;
            }));
        }

        if (week !== 'all') {
            const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
            const idx = weeks.indexOf(week);
            const prevWeek = idx > 0 ? weeks[idx - 1] : null;
            if (!prevWeek) return [];
            return applyDim(data.filter(t => t.week === prevWeek && (month === 'all' || t.month === month)));
        }

        const allDates = data.map(t => t.start).sort((a, b) => Utils.Date.parseTaskDate(a) - Utils.Date.parseTaskDate(b));
        if (allDates.length < 2) return [];
        const half = Math.ceil(allDates.length / 2);
        const prevSet = new Set(allDates.slice(0, half));
        return applyDim(data.filter(t => prevSet.has(t.start)));
    },

    applyResponseTimeFilters(data, filters) {
        const { month, week, dateFrom, dateTo } = filters;

        return (data || []).filter(r => {
            if (month !== 'all' && r.month !== month) return false;
            if (week !== 'all' && r.week !== week) return false;

            if (dateFrom || dateTo) {
                const rd = Utils.Date.parseDate(r.date);
                if (!rd) return false;
                if (dateFrom) {
                    const from = Utils.Date.parseDateInput(dateFrom);
                    if (from && rd < from) return false;
                }
                if (dateTo) {
                    const to = Utils.Date.parseDateInput(dateTo);
                    if (to) {
                        const toEnd = new Date(to);
                        toEnd.setHours(23, 59, 59, 999);
                        if (rd > toEnd) return false;
                    }
                }
            }

            return true;
        });
    },

    getPreviousResponseTimeData(data, filters) {
        const { month, week, dateFrom, dateTo } = filters;
        data = data || [];

        if (dateFrom || dateTo) {
            const parseLocal = s => {
                const parts = s.split('-').map(Number);
                return new Date(parts[0], parts[1] - 1, parts[2]);
            };
            let from = dateFrom ? parseLocal(dateFrom) : null;
            let to = dateTo ? parseLocal(dateTo) : null;
            if (to) to.setHours(23, 59, 59, 999);

            if (!from || !to) {
                const dates = Utils.Array.distinct(data.map(r => r.date))
                    .map(Utils.Date.parseDate).filter(Boolean).sort((a, b) => a - b);
                if (dates.length === 0) return [];
                if (!from) from = dates[0];
                if (!to) { to = new Date(dates[dates.length - 1]);
                    to.setHours(23, 59, 59, 999); }
            }

            const duration = to.getTime() - from.getTime() + 1;
            const prevTo = new Date(from.getTime() - 1);
            const prevFrom = new Date(from.getTime() - duration);

            return data.filter(r => {
                const rd = Utils.Date.parseDate(r.date);
                return rd && rd >= prevFrom && rd <= prevTo;
            });
        }

        if (week !== 'all') {
            const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
            const idx = weeks.indexOf(week);
            const prevWeek = idx > 0 ? weeks[idx - 1] : null;
            if (!prevWeek) return [];
            return data.filter(r => r.week === prevWeek && (month === 'all' || r.month === month));
        }

        const allDates = Utils.Array.distinct(data.map(r => r.date))
            .sort((a, b) => Utils.Date.parseDate(a) - Utils.Date.parseDate(b));
        if (allDates.length < 2) return [];
        const half = Math.ceil(allDates.length / 2);
        const prevSet = new Set(allDates.slice(0, half));
        return data.filter(r => prevSet.has(r.date));
    },

    getFilterSummary(filters) {
        const parts = [];
        if (filters.month !== 'all') {
            parts.push(filters.month.replace(/\[\d+\]\s*/, ''));
        }
        if (filters.week !== 'all') parts.push(filters.week);
        if (filters.dateFrom && filters.dateTo) parts.push(filters.dateFrom + ' – ' + filters.dateTo);
        else if (filters.dateFrom) parts.push('≥ ' + filters.dateFrom);
        else if (filters.dateTo) parts.push('≤ ' + filters.dateTo);
        return parts.length ? parts.join(' · ') : t('allData');
    },
};

/* ================================================================
   CHART ENGINE
   ================================================================ */

const ChartEngine = {

    _charts: {},

    destroy(key) {
        if (this._charts[key]) {
            this._charts[key].destroy();
            delete this._charts[key];
        }
    },

    destroyAll() {
        Object.keys(this._charts).forEach(key => this.destroy(key));
    },

    createDoughnut(canvasId, labels, data, colors, cutout) {
        cutout = cutout || CONFIG.CHART.cutout;
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            const chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels,
                    datasets: [{
                        data,
                        backgroundColor: colors,
                        borderWidth: 2,
                        borderColor: getSurfaceColor(),
                        hoverOffset: 6,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label(c) {
                                    const total = data.reduce((a, b) => a + b, 0);
                                    const pct = total > 0 ? Math.round((c.parsed / total) * 100) : 0;
                                    return c.label + ': ' + c.parsed + ' (' + pct + '%)';
                                }
                            }
                        }
                    }
                },
                plugins: [ChartEngine._plugins.doughnutCenter],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn('Failed to create doughnut chart ' + canvasId + ':', e);
            return null;
        }
    },

    createStackedBar(canvasId, labels, datasets, isHorizontal) {
        isHorizontal = isHorizontal || false;
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            const datasetConfigs = datasets.map(ds => ({
                label: ds.label,
                data: ds.data,
                backgroundColor: ds.color ? Utils.Color.toRGBA(ds.color, 0.85) : 'rgba(91,115,255,0.85)',
                borderRadius: CONFIG.CHART.borderRadius,
                borderSkipped: false,
            }));

            const chart = new Chart(ctx, {
                type: 'bar',
                data: { labels, datasets: datasetConfigs },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: isHorizontal ? 'y' : 'x',
                    plugins: {
                        legend: {
                            labels: { color: getTickColor(), boxWidth: 10, font: { size: 11, family: 'Inter' } },
                        },
                        tooltip: { mode: 'index', intersect: false },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: { color: getGridColor() },
                            ticks: { color: getTickColor(), font: { size: 11, family: 'Inter' } },
                        },
                        y: {
                            stacked: true,
                            grid: { color: getGridColor() },
                            ticks: { color: getTickColor(), font: { size: 11, family: 'Inter' } },
                        },
                    },
                },
                plugins: isHorizontal ? [ChartEngine._plugins.horizontalEnd] : [ChartEngine._plugins.stackTop],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn('Failed to create stacked bar chart ' + canvasId + ':', e);
            return null;
        }
    },

    createSingleBar(canvasId, labels, data, colors) {
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
            const bgColors = data.map((_, i) => Utils.Color.toRGBA(palette[i % palette.length], 0.85));

            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [{
                        label: t('totalTickets'),
                        data,
                        backgroundColor: bgColors,
                        borderRadius: CONFIG.CHART.borderRadius,
                        borderSkipped: false,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    plugins: {
                        legend: { display: false },
                        tooltip: { mode: 'index', intersect: false },
                    },
                    scales: {
                        x: {
                            grid: { color: getGridColor() },
                            ticks: { color: getTickColor(), font: { size: 11, family: 'Inter' } },
                        },
                        y: {
                            grid: { color: getGridColor() },
                            ticks: { color: getTickColor(), font: { size: 11, family: 'Inter' } },
                        },
                    },
                },
                plugins: [ChartEngine._plugins.singleBarLabel],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn('Failed to create single bar chart ' + canvasId + ':', e);
            return null;
        }
    },

    createLine(canvasId, labels, datasets, tooltipFormatter) {
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            const datasetConfigs = datasets.map(ds => ({
                label: ds.label,
                data: ds.data,
                borderColor: ds.color,
                backgroundColor: Utils.Color.toRGBA(ds.color, 0.08),
                tension: CONFIG.CHART.tension,
                fill: true,
                pointRadius: ds.pointRadius !== undefined ? ds.pointRadius : 5,
                pointHoverRadius: ds.pointRadius !== undefined ?
                    (Array.isArray(ds.pointRadius) ? ds.pointRadius.map(r => r === 0 ? 0 : 8) : 8) : 8,
                pointBackgroundColor: ds.color,
                borderWidth: 2,
                formatter: typeof tooltipFormatter === 'function' ? tooltipFormatter : null,
            }));

            const tooltipCallbacks = {
                footer(items) {
                    const total = items.reduce((a, i) => a + i.parsed.y, 0);
                    return 'Total: ' + total;
                },
            };

            if (typeof tooltipFormatter === 'function') {
                tooltipCallbacks.label = function (item) {
                    const val = item.parsed.y;
                    if (val === null || val === undefined) return item.dataset.label + ': -';
                    return item.dataset.label + ': ' + tooltipFormatter(val);
                };
                tooltipCallbacks.footer = function (items) {
                    const total = items.reduce((a, i) => a + (i.parsed.y || 0), 0);
                    return 'Total: ' + tooltipFormatter(total);
                };
            }

            const chart = new Chart(ctx, {
                type: 'line',
                data: { labels, datasets: datasetConfigs },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { intersect: false, mode: 'index' },
                    plugins: {
                        legend: {
                            labels: { color: getTickColor(), boxWidth: 10, font: { size: 11, family: 'Inter' }, padding: 14 },
                        },
                        tooltip: {
                            callbacks: tooltipCallbacks,
                            filter: item => item.label !== '',
                        },
                    },
                    scales: {
                        x: {
                            grid: { color: getGridColor() },
                            ticks: { color: getTickColor(), font: { size: 11, family: 'Inter' } },
                        },
                        y: {
                            beginAtZero: true,
                            grid: { color: getGridColor() },
                            ticks: { color: getTickColor(), font: { size: 11, family: 'Inter' }, stepSize: 2 },
                        },
                    },
                },
                plugins: [ChartEngine._plugins.lineLabel],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn('Failed to create line chart ' + canvasId + ':', e);
            return null;
        }
    },

    _plugins: {

        doughnutCenter: {
            id: 'doughnutCenter',
            afterDraw(chart) {
                if (chart.config.type !== 'doughnut') return;
                const ctx = chart.ctx;
                const chartArea = chart.chartArea;
                const cx = (chartArea.left + chartArea.right) / 2;
                const cy = (chartArea.top + chartArea.bottom) / 2;
                const data = chart.data.datasets[0].data;
                const total = data.reduce((a, b) => a + b, 0);

                const meta = chart.getDatasetMeta(0);
                if (total > 0) {
                    meta.data.forEach((arc, i) => {
                        const val = data[i];
                        if (!val) return;
                        const pct = Math.round((val / total) * 100);
                        if (pct < 4) return;
                        const angle = (arc.startAngle + arc.endAngle) / 2;
                        const r = (arc.outerRadius + arc.innerRadius) / 2;
                        const lx = cx + Math.cos(angle) * r;
                        const ly = cy + Math.sin(angle) * r;
                        ctx.save();
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = '#ffffff';
                        ctx.font = 'bold 11px Inter';
                        ctx.fillText(val, lx, ly - 6);
                        ctx.font = '9px Inter';
                        ctx.fillText(pct + '%', lx, ly + 7);
                        ctx.restore();
                    });
                }

                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = getTextColor();
                ctx.font = 'bold 20px JetBrains Mono,monospace';
                ctx.fillText(total, cx, cy - 7);
                ctx.font = '10px Inter';
                ctx.fillStyle = getTickColor();
                ctx.fillText(t('total'), cx, cy + 9);
                ctx.restore();
            }
        },

        stackTop: {
            id: 'stackTop',
            afterDatasetsDraw(chart) {
                const ctx = chart.ctx;
                const data = chart.data;
                const nds = data.datasets.length;

                for (let di = 0; di < nds; di++) {
                    const meta = chart.getDatasetMeta(di);
                    if (meta.hidden) continue;
                    meta.data.forEach((bar, i) => {
                        const val = data.datasets[di].data[i];
                        if (!val) return;
                        const h = Math.abs(bar.base - bar.y);
                        if (h < 14) return;
                        ctx.save();
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = '#ffffff';
                        ctx.font = 'bold 10px Inter';
                        ctx.fillText(val, bar.x, (bar.y + bar.base) / 2);
                        ctx.restore();
                    });
                }

                data.labels.forEach((_, i) => {
                    let total = 0;
                    let topY = Infinity;
                    for (let dj = 0; dj < nds; dj++) {
                        const m = chart.getDatasetMeta(dj);
                        if (m.hidden) continue;
                        const b = m.data[i];
                        if (!b) continue;
                        total += (data.datasets[dj].data[i] || 0);
                        topY = Math.min(topY, b.y);
                    }
                    if (!total) return;
                    const lastBar = chart.getDatasetMeta(nds - 1).data[i];
                    if (!lastBar) return;
                    ctx.save();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillStyle = getTickColor();
                    ctx.font = 'bold 10px Inter';
                    ctx.fillText(total, lastBar.x, topY - 4);
                    ctx.restore();
                });
            }
        },

        horizontalEnd: {
            id: 'horizontalEnd',
            afterDatasetsDraw(chart) {
                const ctx = chart.ctx;
                const data = chart.data;
                const nds = data.datasets.length;

                for (let di = 0; di < nds; di++) {
                    const meta = chart.getDatasetMeta(di);
                    if (meta.hidden) continue;
                    meta.data.forEach((bar, i) => {
                        const val = data.datasets[di].data[i];
                        if (!val) return;
                        const w = Math.abs(bar.x - bar.base);
                        if (w < 14) return;
                        ctx.save();
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = '#ffffff';
                        ctx.font = 'bold 10px Inter';
                        ctx.fillText(val, (bar.x + bar.base) / 2, bar.y);
                        ctx.restore();
                    });
                }

                data.labels.forEach((_, i) => {
                    let total = 0;
                    let rx = 0;
                    for (let dj = 0; dj < nds; dj++) {
                        const m = chart.getDatasetMeta(dj);
                        if (m.hidden) continue;
                        const b = m.data[i];
                        if (!b) continue;
                        total += (data.datasets[dj].data[i] || 0);
                        rx = Math.max(rx, b.x);
                    }
                    if (!total) return;
                    const bar = chart.getDatasetMeta(nds - 1).data[i];
                    if (!bar) return;
                    ctx.save();
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = getTickColor();
                    ctx.font = 'bold 10px Inter';
                    ctx.fillText(total, rx + 6, bar.y);
                    ctx.restore();
                });
            }
        },

        singleBarLabel: {
            id: 'singleBarLabel',
            afterDatasetsDraw(chart) {
                const ctx = chart.ctx;
                const data = chart.data;
                const meta = chart.getDatasetMeta(0);
                meta.data.forEach((bar, i) => {
                    const val = data.datasets[0].data[i];
                    if (!val) return;
                    ctx.save();
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = getTickColor();
                    ctx.font = 'bold 10px Inter';
                    ctx.fillText(val, bar.x + 6, bar.y);
                    ctx.restore();
                });
            }
        },

        lineLabel: {
            id: 'lineLabel',
            afterDatasetsDraw(chart) {
                const ctx = chart.ctx;
                chart.data.datasets.forEach((ds, di) => {
                    const meta = chart.getDatasetMeta(di);
                    if (meta.hidden) return;
                    meta.data.forEach((pt, i) => {
                        const val = ds.data[i];
                        if (val == null) return;
                        const radius = (pt.options && pt.options.radius !== undefined) ? pt.options.radius : null;
                        if (radius === 0) return;
                        const text = ds.formatter ? ds.formatter(val) : val;
                        ctx.save();
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillStyle = ds.borderColor;
                        ctx.font = 'bold 10px Inter';
                        ctx.fillText(text, pt.x, pt.y - 6);
                        ctx.restore();
                    });
                });
            }
        },
    },

    update(canvasId, newData) {
        const chart = this._charts[canvasId];
        if (!chart) return false;

        try {
            chart.data = newData;
            chart.update();
            return true;
        } catch (e) {
            console.warn('Chart update failed:', e);
            return false;
        }
    },
};

/* ================================================================
   UI RENDERER
   ================================================================ */

const UIRenderer = {

    renderKPI(data, prevData, filterSummary, gridId, badgeId, artInfo) {
        gridId = gridId || 'kpiGrid';
        badgeId = badgeId || 'kpiBadge';
        const grid = document.getElementById(gridId);
        if (!grid) return;

        const cur = DataProcessor.calculateKPIs(data);
        const prev = prevData ? DataProcessor.calculateKPIs(prevData) : null;
        const prevLabel = UIRenderer._getPrevLabel();
        const hasPrev = prev !== null;

        const ahtStr = v => Utils.Duration.formatAHT(v);

        const kpis = [
            {
                id: 'totalTickets',
                value: cur.total,
                color: '#5b73ff',
                sub: t('subAll'),
                delta: hasPrev ? UIRenderer._deltaTag(cur.total, prev.total, false) : null,
            },
            {
                id: 'closed',
                value: cur.closed,
                color: '#10b981',
                sub: Math.round(Utils.Math.percentage(cur.closed, cur.total)) + '% ' + t('subPercent'),
                delta: hasPrev ? UIRenderer._deltaTag(cur.closed, prev.closed, false) : null,
            },
            {
                id: 'issue',
                value: cur.issue,
                color: '#f43f5e',
                sub: Math.round(Utils.Math.percentage(cur.issue, cur.total)) + '% ' + t('subPercent'),
                delta: hasPrev ? UIRenderer._deltaTag(cur.issue, prev.issue, true) : null,
            },
            {
                id: 'nonIssue',
                value: cur.nonIssue,
                color: '#06b6d4',
                sub: Math.round(Utils.Math.percentage(cur.nonIssue, cur.total)) + '% ' + t('subPercent'),
                delta: hasPrev ? UIRenderer._deltaTag(cur.nonIssue, prev.nonIssue, false) : null,
            },
            {
                id: 'activeEsc',
                value: cur.activeEsc,
                color: '#fb923c',
                sub: t('subForwarded'),
                delta: hasPrev ? UIRenderer._deltaTag(cur.activeEsc, prev.activeEsc, true) : null,
            },
            {
                id: 'aht',
                value: ahtStr(cur.aht),
                color: '#8b5cf6',
                sub: t('subAHT'),
                delta: hasPrev ? UIRenderer._deltaAHT(cur.aht, prev.aht) : null,
            },
            {
                id: 'avgResponseTime',
                value: (artInfo && artInfo.cur && artInfo.cur.count > 0) ? Utils.Duration.formatAHT(artInfo.cur.avgMinutes) : '-',
                color: '#06b6d4',
                sub: t('subART'),
                delta: (artInfo && artInfo.cur && artInfo.cur.count > 0 && artInfo.prev && artInfo.prev.count > 0) ? UIRenderer._deltaAHT(artInfo.cur.avgMinutes, artInfo.prev.avgMinutes) : null,
                large: true,
            },
            {
                id: 'sla',
                value: cur.slaRate.toFixed(1) + '%',
                color: '#10b981',
                sub: t('subSLA'),
                delta: hasPrev ? UIRenderer._deltaTag(cur.slaRate, prev.slaRate, false) : null,
            },
        ];

        const badgeEl = document.getElementById(badgeId);
        if (badgeEl) badgeEl.textContent = filterSummary;

        grid.innerHTML = kpis.map(k => {
            const deltaHtml = k.delta ? '<div style="margin-top:6px;display:flex;align-items:center;gap:6px">' + k.delta + '<span class="kpi-compare">' + prevLabel + '</span></div>' : '';
            const cardClass = 'kpi-card' + (k.large ? ' kpi-card-lg' : '');
            return '<div class="' + cardClass + '" style="--kpi-color:' + k.color + '">' +
                '<div class="kpi-bar"></div>' +
                '<div class="kpi-label">' + t(k.id) + '</div>' +
                '<div class="kpi-value">' + k.value + '</div>' +
                '<div class="kpi-sub"><span class="kpi-dot"></span>' + k.sub + '</div>' +
                deltaHtml +
                '</div>';
        }).join('');
    },

    renderEscalation(data, panelId, prevDataParam) {
        panelId = panelId || 'escalationPanel';
        const panel = document.getElementById(panelId);
        if (!panel) return;

        const stats = DataProcessor.calculateEscalationStats(data);

        const prevData = (prevDataParam !== undefined) ? prevDataParam : DataProcessor.getPreviousPeriodData(appState.tickets, appState.filters);
        const prevStats = (prevData && prevData.length) ? DataProcessor.calculateEscalationStats(prevData) : null;
        const hasPrev = prevStats !== null && prevStats.total > 0;
        const prevLabel = UIRenderer._getPrevLabel();

        let html = '<div class="escalation-stats">' +
            '<div class="esc-card">' +
            '<div class="esc-card-label">' + t('escTotal') + '</div>' +
            '<div class="esc-card-value" style="color:#fb923c">' + stats.total + '</div>' +
            '<div class="esc-card-sub">' + stats.rate.toFixed(1) + '% ' + t('ofTotal') + '</div>' +
            (hasPrev ? '<div style="margin-top:5px;display:flex;align-items:center;gap:5px">' + UIRenderer._deltaTag(stats.total, prevStats.total, true) + '<span style="font-size:10px;color:var(--text-muted)">' + prevLabel + '</span></div>' : '') +
            '</div>' +
            '<div class="esc-card">' +
            '<div class="esc-card-label">' + t('escActive') + '</div>' +
            '<div class="esc-card-value" style="color:#f43f5e">' + stats.active + '</div>' +
            '<div class="esc-card-sub">' + t('subForwarded') + '</div>' +
            (hasPrev ? '<div style="margin-top:5px;display:flex;align-items:center;gap:5px">' + UIRenderer._deltaTag(stats.active, prevStats.active, true) + '<span style="font-size:10px;color:var(--text-muted)">' + prevLabel + '</span></div>' : '') +
            '</div>' +
            '<div class="esc-card">' +
            '<div class="esc-card-label">' + t('escClosed') + '</div>' +
            '<div class="esc-card-value" style="color:#10b981">' + stats.closed + '</div>' +
            '<div class="esc-card-sub">' + (stats.total > 0 ? Math.round((stats.closed / stats.total) * 100) : 0) + '% ' + t('resolutionRate') + '</div>' +
            '</div>' +
            '<div class="esc-card">' +
            '<div class="esc-card-label">' + t('escRate') + '</div>' +
            '<div class="esc-card-value" style="color:#8b5cf6">' + stats.rate.toFixed(1) + '%</div>' +
            '<div class="esc-card-sub">' + t('ofTotal') + '</div>' +
            '</div>' +
            '</div>';

        if (stats.byProduct.length) {
            html += '<div class="esc-rows">' +
                '<div class="esc-row">' +
                '<span class="esc-row-label">' + t('escByProduct') + '</span>' +
                '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
                stats.byProduct.map(x => {
                    const clr = CONFIG.CHART.colors[x.name] || '#5b73ff';
                    return '<span class="esc-chip" style="background:' + Utils.Color.toRGBA(clr, 0.15) + ';color:' + clr + '">' + x.label + ' <strong>' + x.total + '</strong>' + (x.active > 0 ? ' <span style="background:' + Utils.Color.toRGBA('#fb923c', 0.25) + ';color:#fb923c;padding:0 4px;border-radius:3px;font-size:10px">' + x.active + ' ' + t('active') + '</span>' : '') + '</span>';
                }).join('') +
                '</div>' +
                '</div>' +
                '</div>';
        }

        if (stats.byTier.length) {
            html += '<div class="esc-rows">' +
                '<div class="esc-row">' +
                '<span class="esc-row-label">' + t('escByTier') + '</span>' +
                '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
                stats.byTier.map(x => {
                    return '<span class="esc-chip" style="background:' + Utils.Color.toRGBA(x.color, 0.15) + ';color:' + x.color + '">' + x.label + ' <strong>' + x.total + '</strong>' + (x.active > 0 ? ' <span style="background:' + Utils.Color.toRGBA('#fb923c', 0.25) + ';color:#fb923c;padding:0 4px;border-radius:3px;font-size:10px">' + x.active + ' ' + t('active') + '</span>' : '') + '</span>';
                }).join('') +
                '</div>' +
                '</div>' +
                '</div>';
        }

        if (stats.byType.length) {
            html += '<div class="esc-rows">' +
                '<div class="esc-row">' +
                '<span class="esc-row-label">' + t('escByType') + '</span>' +
                '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
                stats.byType.map(x => {
                    return '<span class="esc-chip" style="background:' + Utils.Color.toRGBA(x.color, 0.15) + ';color:' + x.color + '">' + x.name + ' <strong>' + x.total + '</strong>' + (x.active > 0 ? ' <span style="background:' + Utils.Color.toRGBA('#fb923c', 0.25) + ';color:#fb923c;padding:0 4px;border-radius:3px;font-size:10px">' + x.active + ' ' + t('active') + '</span>' : '') + '</span>';
                }).join('') +
                '</div>' +
                '</div>' +
                '</div>';
        }

        if (stats.active > 0) {
            const rows = stats.activeRows.map(r => {
                return '<tr>' +
                    '<td>' +
                    '<div class="esc-client">' + r.client + '</div>' +
                    (r.company ? '<div class="esc-client-full">' + r.company + '</div>' : '') +
                    '</td>' +
                    '<td><div class="esc-problem">' + r.problem + '</div></td>' +
                    '<td><span class="esc-prod-badge" style="background:' + Utils.Color.toRGBA(r.productColor, 0.15) + ';color:' + r.productColor + '">' + r.product + '</span></td>' +
                    '<td><span class="esc-pri-badge" style="background:' + Utils.Color.toRGBA(r.priorityColor, 0.2) + ';color:' + r.priorityColor + '">' + r.priority + '</span></td>' +
                    '<td><div class="esc-date">' + r.date + '</div>' + (r.startTime ? '<div style="font-size:10px;color:var(--text-muted)">' + r.startTime + '</div>' : '') + '</td>' +
                    '<td><span style="font-size:11px;padding:2px 7px;border-radius:4px;background:var(--surface-3);color:var(--text-sec)">' + r.escalatedTo + '</span></td>' +
                    '</tr>';
            }).join('');

            html += '<div class="esc-active-detail">' +
                '<div class="esc-active-title">' + t('activeEscalation', { count: stats.active, plural: stats.active > 1 ? 's' : '' }) + '</div>' +
                '<div class="esc-table-wrapper">' +
                '<table class="esc-table">' +
                '<thead><tr>' +
                '<th>' + t('thClient') + '</th>' +
                '<th>' + t('thTask') + '</th>' +
                '<th>' + t('thTag') + '</th>' +
                '<th>' + t('thStatus') + '</th>' +
                '<th>' + t('thDate') + '</th>' +
                '<th>' + t('thEscalatedto') + '</th>' +
                '</tr></thead>' +
                '<tbody>' + rows + '</tbody>' +
                '</table>' +
                '</div>' +
                '</div>';
        }

        panel.innerHTML = html;
    },

    renderCharts(data) {
        UIRenderer._renderPriorityChart(data);
        UIRenderer._renderTierChart(data);
        UIRenderer._renderProductChart(data);
        UIRenderer._renderStaffChart(data);
        UIRenderer._renderTrendChart(data);
        UIRenderer._render6MonthTrendChart();
        UIRenderer._renderShiftChart(data);
    },

    _renderPriorityChart(data, canvasId, legendId) {
        canvasId = canvasId || 'chartPriority';
        legendId = legendId || 'legendPriority';
        const chartData = DataProcessor.preparePriorityData(data);
        const chart = ChartEngine.createDoughnut(
            canvasId,
            chartData.labels,
            chartData.values,
            chartData.colors
        );

        const legend = document.getElementById(legendId);
        if (legend) {
            legend.innerHTML = chartData.labels.map((label, i) => {
                return '<div class="legend-item">' +
                    '<div class="legend-dot" style="background:' + chartData.colors[i] + '"></div>' +
                    label + ' <strong style="color:' + chartData.colors[i] + '">' + chartData.values[i] + '</strong>' +
                    '</div>';
            }).join('');
        }
    },

    _renderTierChart(data, canvasId, legendId) {
        canvasId = canvasId || 'chartTier';
        legendId = legendId || 'legendTier';
        const chartData = DataProcessor.prepareTierData(data);
        if (chartData.labels.length === 0) return;

        ChartEngine.createStackedBar(
            canvasId,
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );

        const legend = document.getElementById(legendId);
        if (legend) {
            let html = '';
            html += '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.non + '"></div>' + t('nonIssue') + '</div>';
            html += '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.issue + '"></div>' + t('issue') + '</div>';
            chartData.labels.forEach((label, i) => {
                const rawTier = chartData.rawTiers[i];
                const color = CONFIG.CHART.colors[rawTier] || ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5];
                html += '<div class="legend-item"><div class="legend-dot" style="background:' + color + '"></div>' + label + ' <strong>' + chartData.totals[i] + '</strong></div>';
            });
            legend.innerHTML = html;
        }
    },

    _renderProductChart(data, canvasId) {
        canvasId = canvasId || 'chartProduct';
        const chartData = DataProcessor.prepareProductData(data);
        if (chartData.labels.length === 0) return;
        ChartEngine.createStackedBar(
            canvasId,
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ],
            true
        );
    },

    _renderFeatureChart(data, canvasId) {
        canvasId = canvasId || 'chartFeature';
        const chartData = DataProcessor.prepareFeatureData(data);
        if (chartData.labels.length === 0) return;
        ChartEngine.createStackedBar(
            canvasId,
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );
    },

    _renderStaffChart(data, canvasId) {
        canvasId = canvasId || 'chartTicketStaff';
        const chartData = DataProcessor.prepareStaffData(data);
        if (chartData.labels.length === 0) {
            const container = document.getElementById(canvasId)?.parentElement;
            if (container) container.innerHTML = '<div class="task-empty">' + t('noData') + '</div>';
            return;
        }
        ChartEngine.createSingleBar(canvasId, chartData.labels, chartData.values);
    },

    _renderTrendChart() {
        const chartData = DataProcessor.prepareTrendData(appState.tickets);
        if (chartData.labels.length === 0) return;

        const labels = chartData.labels.map(label => {
            const parts = label.split(' ');
            return parts.length > 1 ? parts[1] : label;
        });

        ChartEngine.createLine(
            'chartTrend',
            labels,
            [
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
            ]
        );

        const comp = document.getElementById('trendComparison');
        if (comp) {
            const half = Math.floor(chartData.issue.length / 2);

            const cmp = (arr, label) => {
                const prev = arr.slice(0, half).reduce((a, b) => a + b, 0);
                const cur = arr.slice(half).reduce((a, b) => a + b, 0);
                if (!prev && !cur) return '<div class="trend-badge flat">→ ' + label + ' ' + t('stable') + '</div>';
                const delta = cur - prev;
                const pct = prev > 0 ? Math.abs(Math.round((delta / prev) * 100)) : 100;
                if (delta > 0) return '<div class="trend-badge up">↑ ' + label + ' +' + pct + '%</div>';
                if (delta < 0) return '<div class="trend-badge down">↓ ' + label + ' −' + pct + '%</div>';
                return '<div class="trend-badge flat">→ ' + label + ' ' + t('stable') + '</div>';
            };

            comp.innerHTML = cmp(chartData.issue, t('issue')) + cmp(chartData.nonIssue, t('nonIssue')) +
                '<span class="trend-context">' + t('trendContext') + '</span>';
        }
    },

    _render6MonthTrendChart() {
        const chartData = DataProcessor.prepare6MonthTrendData(appState.tickets);
        if (chartData.labels.length === 0) return;

        ChartEngine.createLine(
            'chartTrend6M',
            chartData.labels,
            [
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
            ]
        );

        const comp = document.getElementById('trend6MComparison');
        if (comp) {
            const half = Math.floor(chartData.issue.length / 2);

            const cmp = (arr, label) => {
                const prev = arr.slice(0, half).reduce((a, b) => a + b, 0);
                const cur = arr.slice(half).reduce((a, b) => a + b, 0);
                if (!prev && !cur) return '<div class="trend-badge flat">→ ' + label + ' ' + t('stable') + '</div>';
                const delta = cur - prev;
                const pct = prev > 0 ? Math.abs(Math.round((delta / prev) * 100)) : 100;
                if (delta > 0) return '<div class="trend-badge up">↑ ' + label + ' +' + pct + '%</div>';
                if (delta < 0) return '<div class="trend-badge down">↓ ' + label + ' −' + pct + '%</div>';
                return '<div class="trend-badge flat">→ ' + label + ' ' + t('stable') + '</div>';
            };

            comp.innerHTML = cmp(chartData.issue, t('issue')) + cmp(chartData.nonIssue, t('nonIssue')) +
                '<span class="trend-context">' + t('trendContext') + '</span>';
        }
    },

    _renderShiftChart(data, canvasId, legendId, subtitleId) {
        canvasId = canvasId || 'chartShift';
        legendId = legendId || 'legendShift';
        subtitleId = subtitleId || 'chartShiftSub';

        const canonicalShifts = ['Pagi', 'Siang', 'Malam'];
        const shifts = canonicalShifts.filter(s => data.some(r => r.shift === s));

        if (shifts.length === 0 || data.length === 0) {
            const container = document.getElementById(canvasId)?.parentElement;
            if (container) container.innerHTML = '<div class="task-empty">' + t('noData') + '</div>';
            return;
        }

        const nonIssue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Non Issue').length);
        const issue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Issue').length);
        const totals = shifts.map(s => data.filter(r => r.shift === s).length);

        const shiftLabelMap = { Pagi: t('morning'), Siang: t('day'), Malam: t('night') };
        const labels = shifts.map(s => shiftLabelMap[s] || s);

        const subtitleEl = document.getElementById(subtitleId);
        if (subtitleEl) {
            subtitleEl.textContent = labels.join(' · ');
        }

        const paddedLabels = [''].concat(labels).concat(['']);
        const edgeRadius = [0].concat(shifts.map(() => 5)).concat([0]);
        const paddedNonIssue = [0].concat(nonIssue).concat([0]);
        const paddedIssue = [0].concat(issue).concat([0]);

        ChartEngine.createLine(
            canvasId,
            paddedLabels,
            [
                { label: t('nonIssue'), data: paddedNonIssue, color: CONFIG.CHART.colors.non, pointRadius: edgeRadius },
                { label: t('issue'), data: paddedIssue, color: CONFIG.CHART.colors.issue, pointRadius: edgeRadius },
            ]
        );

        const legend = document.getElementById(legendId);
        if (legend) {
            legend.innerHTML = shifts.map((shift, i) => {
                return '<div class="legend-item">' +
                    '<div class="legend-dot" style="background:' + CONFIG.CHART.colors[shift] + '"></div>' +
                    labels[i] + ' <strong style="color:' + CONFIG.CHART.colors[shift] + '">' + totals[i] + '</strong>' +
                    '</div>';
            }).join('');
        }
    },

    renderTaskSection(tasks, filters) {
        const filtered = FilterEngine.applyTaskFilters(tasks, filters);
        const prevData = FilterEngine.getPreviousTaskData(tasks, filters);
        const prevMetrics = prevData.length ? DataProcessor.calculateTaskMetrics(prevData) : null;
        const prevLabel = UIRenderer._getPrevLabel();

        const metrics = DataProcessor.calculateTaskMetrics(filtered);
        const completionRate = metrics.total > 0 ? Math.round((metrics.done / metrics.total) * 100) : 0;

        const taskStats = [
            { id: 'totalTasks', value: metrics.total, color: '#5b73ff', sub: t('totalTasks') },
            { id: 'done', value: metrics.done, color: '#10b981', sub: completionRate + '% ' + t('completed') },
            { id: 'progress', value: metrics.progress, color: '#f59e0b', sub: t('inProgress') },
            { id: 'totalWorkHours', value: Utils.Duration.formatHMS(metrics.totalMinutes), color: '#8b5cf6', sub: metrics.staffCount + ' ' + t('activeStaff') },
        ];

        const grid = document.getElementById('taskKpiGrid');
        if (grid) {
            grid.innerHTML = taskStats.map(s => {
                const deltaHtml = prevMetrics ? '<div style="margin-top:6px;display:flex;align-items:center;gap:6px">' + UIRenderer._deltaTag(metrics.total, prevMetrics.total, false) + '<span class="kpi-compare">' + prevLabel + '</span></div>' : '';
                return '<div class="kpi-card" style="--kpi-color:' + s.color + '">' +
                    '<div class="kpi-bar"></div>' +
                    '<div class="kpi-label">' + t(s.id) + '</div>' +
                    '<div class="kpi-value">' + s.value + '</div>' +
                    '<div class="kpi-sub"><span class="kpi-dot"></span>' + s.sub + '</div>' +
                    deltaHtml +
                    '</div>';
            }).join('');
        }

        document.getElementById('taskBadge').textContent = FilterEngine.getFilterSummary(filters);

        const statusData = [];
        const statusLabels = [];
        const statusColors = [];
        if (metrics.done > 0) { statusLabels.push('Done');
            statusData.push(metrics.done);
            statusColors.push('#10b981'); }
        if (metrics.progress > 0) { statusLabels.push('Progress');
            statusData.push(metrics.progress);
            statusColors.push('#f59e0b'); }

        if (statusData.length) {
            ChartEngine.createDoughnut('chartTaskStatus', statusLabels, statusData, statusColors);
            const legend = document.getElementById('legendTaskStatus');
            if (legend) {
                legend.innerHTML = statusLabels.map((label, i) => {
                    return '<div class="legend-item">' +
                        '<div class="legend-dot" style="background:' + statusColors[i] + '"></div>' +
                        label + ' <strong style="color:' + statusColors[i] + '">' + statusData[i] + '</strong>' +
                        '<span style="color:var(--text-muted)">(' + Math.round((statusData[i] / filtered.length) * 100) + '%)</span>' +
                        '</div>';
                }).join('');
            }
        }

        const staffData = UIRenderer._prepareTaskStaffData(filtered);
        if (staffData.labels.length) {
            ChartEngine.createSingleBar('chartTaskStaff', staffData.labels, staffData.values);
        } else {
            const container = document.getElementById('chartTaskStaff')?.parentElement;
            if (container) container.innerHTML = '<div class="task-empty">' + t('noData') + '</div>';
        }

        UIRenderer._populateTaskFilters(filtered);
        UIRenderer.renderTaskTable(filtered);
    },

    _prepareTaskStaffData(data) {
        const staffs = Utils.Array.distinct(data.map(t => t.staff)).sort();
        const counts = staffs.map(s => data.filter(t => t.staff === s).length);
        const combined = staffs.map((s, i) => ({ label: s, count: counts[i] }))
            .filter(x => x.count > 0)
            .sort((a, b) => b.count - a.count);
        return {
            labels: combined.map(x => x.label.split(' ').slice(0, 2).join(' ')),
            values: combined.map(x => x.count),
        };
    },

    _renderTopClientTable(tickets) {
        const list = DataProcessor.prepareTopClientIssueData(tickets || []);
        UIRenderer._renderTopClientTablePage(list);
    },

    _renderRecentIncidentsTable(incidents) {
        const tbody = document.getElementById('incidentHistoryTableBody');
        if (!tbody) return;

        const list = (incidents || []).slice().sort((a, b) => {
            const da = a.startTimeRaw ? new Date(a.startTimeRaw) : new Date(0);
            const db = b.startTimeRaw ? new Date(b.startTimeRaw) : new Date(0);
            return db - da;
        }).slice(0, 5);

        if (list.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6"><div class="task-empty">' + t('noIncidents') + '</div></td></tr>';
            return;
        }

        tbody.innerHTML = list.map(inc => {
            const durationText = (inc.durationMinutes !== null && inc.durationMinutes !== undefined) ? Utils.Duration.formatHMS(inc.durationMinutes) : '-';
            return '<tr>' +
                '<td>' + Utils.String.escapeHtml(inc.startTime || '-') + '</td>' +
                '<td>' + Utils.String.escapeHtml(inc.endTime || '-') + '</td>' +
                '<td>' + Utils.String.escapeHtml(inc.product || '-') + '</td>' +
                '<td>' + Utils.String.escapeHtml(inc.problem || '-') + '</td>' +
                '<td>' + Utils.String.escapeHtml(inc.rootCause || '-') + '</td>' +
                '<td>' + durationText + '</td>' +
                '</tr>';
        }).join('');
    },

    _renderTopClientTablePage(list) {
        const pageSize = CONFIG.PAGINATION.pageSize;
        const totalPages = Utils.Array.totalPages(list, pageSize);
        let page = Math.min(appState.ui.topClientPage || 1, totalPages);
        appState.ui.topClientPage = page;
        const pageItems = Utils.Array.paginate(list, page, pageSize);

        const tbody = document.getElementById('topClientTableBody');
        if (!tbody) return;

        if (pageItems.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3"><div class="task-empty">' + t('noData') + '</div></td></tr>';
            UIRenderer._renderTopClientPagination(list, 0, 0);
            return;
        }

        const startIdx = (page - 1) * pageSize;
        tbody.innerHTML = pageItems.map((item, i) => {
            return '<tr>' +
                '<td class="tc-col-num">' + (startIdx + i + 1) + '</td>' +
                '<td class="tc-col-name">' + Utils.String.escapeHtml(item.name) + '</td>' +
                '<td class="tc-col-total">' + item.count + '</td>' +
                '</tr>';
        }).join('');

        Array.prototype.forEach.call(tbody.querySelectorAll('tr'), (row, i) => {
            row.addEventListener('click', () => {
                UIRenderer._showTopClientModal(pageItems[i]);
            });
        });

        UIRenderer._renderTopClientPagination(list, list.length, totalPages);
    },

    _renderTopClientPagination(list, totalItems, totalPages) {
        const el = document.getElementById('topClientPagination');
        if (!el) return;

        const pageSize = CONFIG.PAGINATION.pageSize;
        const page = Math.min(appState.ui.topClientPage || 1, totalPages || 1);
        const startIdx = totalItems > 0 ? (page - 1) * pageSize + 1 : 0;
        const endIdx = Math.min(page * pageSize, totalItems);

        const infoText = totalItems > 0 ? (startIdx + ' - ' + endIdx + ' / ' + totalItems) : t('noData');

        if (totalPages <= 1) {
            el.innerHTML = '<div class="pagination-info">' + infoText + '</div>';
            return;
        }

        el.innerHTML = '<div class="pagination-info">' + infoText + '</div>' +
            '<div class="pagination-buttons">' +
            '<button class="pagination-btn" data-page="prev" ' + (page <= 1 ? 'disabled' : '') + '>&lsaquo;</button>' +
            '<button class="pagination-btn" data-page="next" ' + (page >= totalPages ? 'disabled' : '') + '>&rsaquo;</button>' +
            '</div>';

        el.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', function () {
                const target = this.dataset.page;
                let newPage = target === 'prev' ? page - 1 : page + 1;
                if (newPage >= 1 && newPage <= totalPages) {
                    appState.ui.topClientPage = newPage;
                    UIRenderer._renderTopClientTablePage(list);
                }
            });
        });
    },

    _showTopClientModal(item) {
        const overlay = document.getElementById('topClientModalOverlay');
        const title = document.getElementById('topClientModalTitle');
        const body = document.getElementById('topClientModalBody');
        if (!overlay || !title || !body || !item) return;

        title.textContent = item.name;

        if (!item.problems || item.problems.length === 0) {
            body.innerHTML = '<div class="task-empty">' + t('noData') + '</div>';
        } else {
            body.innerHTML = item.problems.map(p => {
                const priColor = CONFIG.CHART.colors[p.priority] || CONFIG.CHART.colors.Low;
                const crmUrl = p.ticketCRM ? 'https://crm3.ivosights.com/admin/tickets/ticket/' + encodeURIComponent(p.ticketCRM) : '';
                const crmLinkHtml = crmUrl ?
                    '<a class="modal-crm-link" href="' + crmUrl + '" target="_blank" rel="noopener noreferrer" title="Open Tiket CRM">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>' +
                    '</a>' : '';
                return '<div class="modal-problem-item">' +
                    '<div class="modal-problem-top">' +
                    '<span class="esc-pri-badge" style="background:' + Utils.Color.toRGBA(priColor, 0.2) + ';color:' + priColor + '">' + Utils.String.escapeHtml(p.priority || '-') + '</span>' +
                    '<span class="modal-problem-date">' + Utils.String.escapeHtml(p.date || '-') + '</span>' +
                    (p.ticketSociomile ? '<span class="modal-problem-sociomile">' + Utils.String.escapeHtml(p.ticketSociomile) + '</span>' : '') +
                    crmLinkHtml +
                    '</div>' +
                    '<div class="modal-problem-text">' + Utils.String.escapeHtml(p.problem || '-') + '</div>' +
                    '</div>';
            }).join('');
        }

        overlay.classList.add('is-open');
    },

    _hideTopClientModal() {
        const overlay = document.getElementById('topClientModalOverlay');
        if (overlay) overlay.classList.remove('is-open');
    },

    _populateTaskFilters(data) {
        const staffs = Utils.Array.distinct(data.map(t => t.staff)).sort();

        const staffSelect = document.getElementById('taskFilterStaffSelect');
        if (staffSelect) {
            const currentVal = staffSelect.value;
            staffSelect.innerHTML = '<option value="all">' + t('taskAllStaff') + '</option>';
            staffs.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s;
                opt.textContent = s;
                staffSelect.appendChild(opt);
            });
            if (staffSelect.querySelector('option[value="' + currentVal + '"]')) {
                staffSelect.value = currentVal;
            }
        }

        const ticketStaffSelect = document.getElementById('filterStaff');
        if (ticketStaffSelect && ticketStaffSelect.options.length <= 1) {
            const ticketStaffs = DataProcessor.getStaffList(appState.tickets);
            ticketStaffs.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s;
                opt.textContent = s;
                ticketStaffSelect.appendChild(opt);
            });
        }
    },

    renderTaskTable(data) {
        const search = appState.ui.taskSearch || '';
        const staffFilter = appState.ui.taskFilterStaff || 'all';
        const statusFilter = appState.ui.taskFilterStatus || 'all';

        let filtered = data.filter(t => {
            if (staffFilter !== 'all' && t.staff !== staffFilter) return false;
            if (statusFilter !== 'all' && t.status !== statusFilter) return false;
            if (search && t.task.toLowerCase().indexOf(search) === -1 && t.staff.toLowerCase().indexOf(search) === -1)
                return false;
            return true;
        });

        filtered = filtered.slice().sort((a, b) => Utils.Date.parseTaskDate(b.start) - Utils.Date.parseTaskDate(a.start));

        const pageSize = CONFIG.PAGINATION.pageSize;
        const totalPages = Utils.Array.totalPages(filtered, pageSize);
        const currentPage = Math.min(appState.ui.taskPage, totalPages);
        const pageItems = Utils.Array.paginate(filtered, currentPage, pageSize);

        const tbody = document.getElementById('taskTableBody');
        if (!tbody) return;

        if (pageItems.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6"><div class="task-empty">' + t('noTasks') + '</div></td></tr>';
            UIRenderer._renderPagination(0, 0);
            return;
        }

        tbody.innerHTML = pageItems.map(t => {
            const statusColor = t.status === 'Done' ? '#10b981' : '#f59e0b';
            const initials = Utils.String.escapeHtml(Utils.String.getInitials(t.staff));
            const tags = (t.note || '').split(' ').filter(x => x.indexOf('#') === 0);
            const tagHtml = tags.length ?
                tags.map(tag => '<span class="task-tag">' + Utils.String.escapeHtml(tag) + '</span>').join(' ') :
                (t.note ? '<span style="font-size:11px;color:var(--text-muted)">' + Utils.String.escapeHtml(t.note) + '</span>' : '-');
            const staffShort = Utils.String.escapeHtml(t.staff.split(' ').slice(0, 2).join(' '));

            return '<tr>' +
                '<td><div class="task-staff-cell"><div class="task-avatar">' + initials + '</div><span>' + staffShort + '</span></div></td>' +
                '<td><div class="task-name">' + Utils.String.escapeHtml(t.task) + '</div></td>' +
                '<td>' + tagHtml + '</td>' +
                '<td><div class="task-duration">' + Utils.Duration.formatHMS(Utils.Duration.parse(t.duration)) + '</div></td>' +
                '<td><span class="task-status-badge" style="background:' + Utils.Color.toRGBA(statusColor, 0.18) + ';color:' + statusColor + '">' + t.status + '</span></td>' +
                '<td><div class="task-date">' + Utils.Date.formatTaskDate(t.start) + '</div></td>' +
                '</tr>';
        }).join('');

        UIRenderer._renderPagination(filtered.length, totalPages);
    },

    _renderPagination(totalItems, totalPages) {
        const el = document.getElementById('taskPagination');
        if (!el) return;

        const page = Math.min(appState.ui.taskPage, totalPages || 1);
        const startIdx = (page - 1) * CONFIG.PAGINATION.pageSize + 1;
        const endIdx = Math.min(page * CONFIG.PAGINATION.pageSize, totalItems);

        const infoText = totalItems > 0 ?
            t('showing') + ' ' + startIdx + '–' + endIdx + ' ' + t('from') + ' ' + totalItems + ' ' + t('totalTasks').toLowerCase() :
            t('noTasks');

        if (totalPages <= 1) {
            el.innerHTML = '<div class="pagination-info">' + infoText + '</div>';
            return;
        }

        const pages = [];
        const windowSize = 1;
        for (let p = 1; p <= totalPages; p++) {
            if (p === 1 || p === totalPages || Math.abs(p - page) <= windowSize) {
                pages.push(p);
            } else if (pages[pages.length - 1] !== '…') {
                pages.push('…');
            }
        }

        const btnsHtml = pages.map(pg => {
            if (pg === '…') return '<span class="pagination-ellipsis">…</span>';
            return '<button class="pagination-btn' + (pg === page ? ' active' : '') + '" data-page="' + pg + '">' + pg + '</button>';
        }).join('');

        el.innerHTML = '<div class="pagination-info">' + infoText + '</div>' +
            '<div class="pagination-buttons">' +
            '<button class="pagination-btn" data-page="prev" ' + (page <= 1 ? 'disabled' : '') + '>&lsaquo;</button>' +
            btnsHtml +
            '<button class="pagination-btn" data-page="next" ' + (page >= totalPages ? 'disabled' : '') + '>&rsaquo;</button>' +
            '</div>';

        el.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', function () {
                const target = this.dataset.page;
                let newPage;
                if (target === 'prev') newPage = page - 1;
                else if (target === 'next') newPage = page + 1;
                else newPage = parseInt(target, 10);

                if (newPage >= 1 && newPage <= totalPages) {
                    appState.ui.taskPage = newPage;
                    UIRenderer.renderTaskTable(appState.filteredTasks);
                }
            });
        });
    },

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },

    renderMTM() {
        const filters = appState.mtmFilters;
        const badge = document.getElementById('mtmBadge');
        const emptyState = document.getElementById('mtmEmptyState');
        const content = document.getElementById('mtmContent');

        const data = DataProcessor.prepareMonthlyComparison(appState.tickets, filters.monthFrom, filters.monthTo, appState.responseTimes, appState.tasks, filters.staff);

        if (!data || data.buckets.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            if (content) content.style.display = 'none';
            if (badge) badge.textContent = t('allData');
            ChartEngine.destroy('chartMTMVolume');
            ChartEngine.destroy('chartMTMClosed');
            ChartEngine.destroy('chartMTMIssue');
            ChartEngine.destroy('chartMTMNonIssue');
            ChartEngine.destroy('chartMTMActiveEsc');
            ChartEngine.destroy('chartMTMART');
            ChartEngine.destroy('chartMTMAHT');
            ChartEngine.destroy('chartMTMSLA');
            ChartEngine.destroy('chartMTMPriority');
            ChartEngine.destroy('chartMTMProductCompare');
            ChartEngine.destroy('chartMTMStaffCompare');
            ChartEngine.destroy('chartMTMTaskStaffCompare');
            ChartEngine.destroy('chartMTMShiftCompare');
            return;
        }

        if (emptyState) emptyState.style.display = 'none';
        if (content) content.style.display = 'block';
        if (badge) badge.textContent = t('mtmMonthsCompared', { count: data.buckets.length });

        UIRenderer._renderMTMTable(data.buckets);
        UIRenderer._renderMTMCharts(data.buckets);
    },

    _renderMTMTable(buckets) {
        const table = document.getElementById('mtmTable');
        if (!table) return;

        const metrics = [
            { id: 'totalTickets', get: k => k.total, fmt: v => String(v), invert: false },
            { id: 'closed', get: k => k.closed, fmt: v => String(v), invert: false },
            { id: 'issue', get: k => k.issue, fmt: v => String(v), invert: true },
            { id: 'nonIssue', get: k => k.nonIssue, fmt: v => String(v), invert: false },
            { id: 'activeEsc', get: k => k.activeEsc, fmt: v => String(v), invert: true },
            { id: 'totalTasks', get: k => k.totalTasks, fmt: v => String(v), invert: false },
            { id: 'aht', get: k => k.aht, fmt: v => Utils.Duration.formatAHT(v), invert: true },
            { id: 'avgResponseTime', get: k => k.artCount > 0 ? k.artMinutes : null, fmt: v => v === null ? '-' : Utils.Duration.formatAHT(v), invert: true },
            { id: 'fcrRate', get: k => k.fcrRate, fmt: v => v.toFixed(1) + '%', invert: false },
            { id: 'sla', get: k => k.slaRate, fmt: v => v.toFixed(1) + '%', invert: false },
        ];

        const head = '<thead><tr><th>' + t('mtmMetricHeader') + '</th>' +
            buckets.map(b => '<th>' + b.label + '</th>').join('') +
            '</tr></thead>';

        const body = '<tbody>' + metrics.map(m => {
            const cells = buckets.map((b, i) => {
                const val = m.get(b.kpi);
                const display = m.fmt(val);
                let deltaHtml = '';
                if (i > 0) {
                    const prevVal = m.get(buckets[i - 1].kpi);
                    if (val !== null && prevVal !== null) {
                        deltaHtml = UIRenderer._deltaTag(val, prevVal, m.invert);
                    }
                }
                return '<td><div class="mtm-cell-value">' + display + '</div>' + (deltaHtml ? '<div class="mtm-cell-delta">' + deltaHtml + '</div>' : '') + '</td>';
            }).join('');
            return '<tr><td class="mtm-row-label">' + t(m.id) + '</td>' + cells + '</tr>';
        }).join('') + '</tbody>';

        table.innerHTML = head + body;
    },

    _renderMTMCharts(buckets) {
        const labels = buckets.map(b => b.label);

        const issue = buckets.map(b => b.kpi.issue);
        const nonIssue = buckets.map(b => b.kpi.nonIssue);

        ChartEngine.createLine('chartMTMVolume', labels, [
            { label: t('nonIssue'), data: nonIssue, color: CONFIG.CHART.colors.non },
            { label: t('issue'), data: issue, color: CONFIG.CHART.colors.issue },
        ]);

        const legendVol = document.getElementById('legendMTMVolume');
        if (legendVol) {
            legendVol.innerHTML =
                '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.non + '"></div>' + t('nonIssue') + '</div>' +
                '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.issue + '"></div>' + t('issue') + '</div>';
        }

        const closedValues = buckets.map(b => b.kpi.closed);
        ChartEngine.createLine('chartMTMClosed', labels, [
            { label: t('closed'), data: closedValues, color: '#10b981' },
        ]);

        ChartEngine.createLine('chartMTMIssue', labels, [
            { label: t('issue'), data: issue, color: CONFIG.CHART.colors.issue },
        ]);

        ChartEngine.createLine('chartMTMNonIssue', labels, [
            { label: t('nonIssue'), data: nonIssue, color: CONFIG.CHART.colors.non },
        ]);

        const activeEscValues = buckets.map(b => b.kpi.activeEsc);
        ChartEngine.createLine('chartMTMActiveEsc', labels, [
            { label: t('activeEsc'), data: activeEscValues, color: '#fb923c' },
        ]);

        const artValues = buckets.map(b => b.kpi.artCount > 0 ? b.kpi.artMinutes : null);
        ChartEngine.createLine('chartMTMART', labels, [
            { label: t('avgResponseTime'), data: artValues, color: '#06b6d4' },
        ], Utils.Duration.formatHMS);

        const priDatasets = CONFIG.PRIORITIES.map(p => ({
            label: p,
            data: buckets.map(b => {
                const idx = b.priority.labels.indexOf(p);
                return idx !== -1 ? b.priority.values[idx] : 0;
            }),
            color: CONFIG.CHART.colors[p],
        }));

        ChartEngine.createStackedBar('chartMTMPriority', labels, priDatasets);

        const legendPri = document.getElementById('legendMTMPriority');
        if (legendPri) {
            legendPri.innerHTML = CONFIG.PRIORITIES.map(p => {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors[p] + '"></div>' + p + '</div>';
            }).join('');
        }

        const ahtValues = buckets.map(b => b.kpi.aht);
        ChartEngine.createLine('chartMTMAHT', labels, [
            { label: t('aht'), data: ahtValues, color: '#8b5cf6' },
        ], Utils.Duration.formatHMS);

        const slaValues = buckets.map(b => Utils.Math.round(b.kpi.slaRate, 1));
        ChartEngine.createLine('chartMTMSLA', labels, [
            { label: t('sla'), data: slaValues, color: '#10b981' },
        ], val => val + '%');

        const productData = DataProcessor.prepareMonthlyProductComparison(buckets);
        ChartEngine.createStackedBar('chartMTMProductCompare', productData.labels, productData.datasets);
        const legendProductCompare = document.getElementById('legendMTMProductCompare');
        if (legendProductCompare) {
            legendProductCompare.innerHTML = productData.datasets.map(ds => {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }

        const staffCompareData = DataProcessor.prepareMonthlyStaffComparison(buckets);
        ChartEngine.createStackedBar('chartMTMStaffCompare', staffCompareData.labels, staffCompareData.datasets);
        const legendStaffCompare = document.getElementById('legendMTMStaffCompare');
        if (legendStaffCompare) {
            legendStaffCompare.innerHTML = staffCompareData.datasets.map(ds => {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }

        const taskStaffCompareData = DataProcessor.prepareMonthlyTaskStaffComparison(buckets);
        ChartEngine.createStackedBar('chartMTMTaskStaffCompare', taskStaffCompareData.labels, taskStaffCompareData.datasets);
        const legendTaskStaffCompare = document.getElementById('legendMTMTaskStaffCompare');
        if (legendTaskStaffCompare) {
            legendTaskStaffCompare.innerHTML = taskStaffCompareData.datasets.map(ds => {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }

        const shiftCompareData = DataProcessor.prepareMonthlyShiftComparison(buckets);
        ChartEngine.createStackedBar('chartMTMShiftCompare', shiftCompareData.labels, shiftCompareData.datasets);
        const legendShiftCompare = document.getElementById('legendMTMShiftCompare');
        if (legendShiftCompare) {
            legendShiftCompare.innerHTML = shiftCompareData.datasets.map(ds => {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }
    },

    updateSyncStatus(status, timestamp) {
        const dot = document.getElementById('syncDot');
        const label = document.getElementById('syncLabel');
        const badge = document.getElementById('syncBadge');

        if (!dot || !label) return;

        const ts = timestamp ? timestamp.toLocaleTimeString(getLang() === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit' }) : '';

        if (status === 'syncing') {
            label.textContent = t('syncing');
            dot.style.background = '#f59e0b';
        } else if (status === 'live') {
            label.textContent = t('live') + ' · sync ' + ts;
            dot.style.background = '#10b981';
        } else if (status === 'fileproto') {
            label.textContent = t('fileProtocol');
            dot.style.background = '#f43f5e';
        } else if (status === 'error') {
            label.textContent = t('syncFailed');
            dot.style.background = '#f43f5e';
        } else {
            label.textContent = t('fallback');
            dot.style.background = '#94a3b8';
        }
    },

    _deltaTag(cur, prev, invertGood) {
        invertGood = invertGood || false;
        if (prev === 0 && cur === 0) return '<span class="kpi-delta neutral">→ 0</span>';
        if (prev === 0) {
            const cls = invertGood ? 'down-bad' : 'up-good';
            return '<span class="kpi-delta ' + cls + '">↑ new</span>';
        }
        const diff = cur - prev;
        const pct = Math.abs(Math.round((diff / prev) * 100));
        if (diff === 0) return '<span class="kpi-delta neutral">→ 0%</span>';
        if (diff > 0) {
            const clsUp = invertGood ? 'up' : 'up-good';
            return '<span class="kpi-delta ' + clsUp + '">↑ +' + pct + '%</span>';
        }
        const clsDown = invertGood ? 'down' : 'down-bad';
        return '<span class="kpi-delta ' + clsDown + '">↓ −' + pct + '%</span>';
    },

    _deltaAHT(cur, prev) {
        if (prev === 0 && cur === 0) return '<span class="kpi-delta neutral">→ 0%</span>';
        if (prev === 0) return '';
        const diff = cur - prev;
        const pct = Math.abs(Math.round((diff / prev) * 100));
        if (diff === 0) return '<span class="kpi-delta neutral">→ 0%</span>';
        if (diff > 0) return '<span class="kpi-delta down-bad">↑ +' + pct + '%</span>';
        return '<span class="kpi-delta up-good">↓ −' + pct + '%</span>';
    },

    _getPrevLabel() {
        const week = appState.filters.week, dateFrom = appState.filters.dateFrom, dateTo = appState.filters.dateTo;
        if (dateFrom || dateTo) return t('vsPrevPeriod');
        if (week !== 'all') return t('vsPrevWeek');
        return t('vsPrevHalf');
    },

    populateDynamicFilters(tickets, tasks) {
        const combinedForMonth = tickets.concat(tasks);

        UIRenderer._populateFilter('filterMonth', combinedForMonth, 'month', 'allMonths', v => v.replace(/\[\d+\]\s*/, ''), (a, b) => {
            return UIRenderer._monthSortValue(a.label) - UIRenderer._monthSortValue(b.label);
        });
        UIRenderer._populateFilter('filterWeek', tickets, 'week', 'allWeeks');
        UIRenderer._populateFilter('filterProduct', tickets, 'product', 'allProducts');
        UIRenderer._populateFilter('filterTier', tickets, 'tier', 'allTiers', v => Utils.String.formatTier(v));
        UIRenderer._populateShiftFilter();
        UIRenderer._populateFilter('filterStaff', tickets, 'staff', 'allStaff');
        UIRenderer._populateFilter('filterTaskStaff', tasks, 'staff', 'allStaff');
        UIRenderer._populateTaskStaffFilter(tasks);
        UIRenderer._populateMTMMonthRangeFilters(tickets);
        UIRenderer._populateMTMStaffFilter(combinedForMonth);
    },

    _MONTH_ORDER: {
        january: 1, februari: 2, february: 2, march: 3, maret: 3, april: 4,
        may: 5, mei: 5, june: 6, juni: 6, july: 7, juli: 7, august: 8, agustus: 8,
        september: 9, october: 10, oktober: 10, november: 11, december: 12, desember: 12,
    },

    _monthSortValue(label) {
        const clean = String(label || '').replace(/\[\d+\]\s*/, '').trim();
        const match = clean.match(/^(.*?)\s*-\s*(\d{4})\s*$/);
        const monthPart = (match ? match[1] : clean).trim().toLowerCase();
        const year = match ? parseInt(match[2], 10) : 0;
        const monthNum = UIRenderer._MONTH_ORDER[monthPart] !== undefined ? UIRenderer._MONTH_ORDER[monthPart] : 999;
        return year * 1000 + monthNum;
    },

    _populateFilter(selectId, data, key, allLabelKey, formatFn, sortFn) {
        const select = document.getElementById(selectId);
        if (!select) return;

        const currentVal = select.value;
        const rawValues = Utils.Array.distinct(data.map(r => r[key])).filter(Boolean);

        const defaultSort = (a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base' });

        const options = rawValues.map(val => ({
            val,
            label: (formatFn ? formatFn(val) : val).trim()
        })).sort(sortFn || defaultSort);

        select.innerHTML = '<option value="all">' + t(allLabelKey) + '</option>';

        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.val;
            option.textContent = opt.label;
            select.appendChild(option);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }
    },

    _populateShiftFilter() {
        const select = document.getElementById('filterShift');
        if (!select) return;

        const currentVal = select.value;
        const shifts = [
            { value: 'Pagi', label: t('morning') },
            { value: 'Siang', label: t('day') },
            { value: 'Malam', label: t('night') },
        ];

        select.innerHTML = '<option value="all">' + t('allShifts') + '</option>';
        shifts.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.value;
            opt.textContent = s.label;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }
    },

    _populateMTMMonthRangeFilters(tickets) {
        const rawValues = Utils.Array.distinct(tickets.map(r => r.month)).filter(Boolean);

        const options = rawValues.map(val => ({
            val,
            label: val.replace(/\[\d+\]\s*/, '').trim()
        })).sort((a, b) => UIRenderer._monthSortValue(a.val) - UIRenderer._monthSortValue(b.val));

        ['filterMTMMonthFrom', 'filterMTMMonthTo'].forEach(id => {
            const select = document.getElementById(id);
            if (!select) return;

            const currentVal = select.value;
            select.innerHTML = '';

            options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.val;
                option.textContent = opt.label;
                select.appendChild(option);
            });

            if (Array.from(select.options).some(o => o.value === currentVal)) {
                select.value = currentVal;
            }
        });
    },

    _populateTaskStaffFilter(tasks) {
        const select = document.getElementById('taskFilterStaffSelect');
        if (!select) return;

        const staffs = Utils.Array.distinct(tasks.map(t => t.staff).filter(Boolean)).sort();
        const currentVal = select.value;

        select.innerHTML = '<option value="all">' + t('taskAllStaff') + '</option>';

        staffs.forEach(staff => {
            const opt = document.createElement('option');
            opt.value = staff;
            opt.textContent = staff;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }
    },

    _populateMTMStaffFilter(data) {
        const select = document.getElementById('filterMTMStaff');
        if (!select) return;

        const staffs = Utils.Array.distinct(data.map(r => r.staff).filter(Boolean)).sort();
        const currentVal = select.value;

        select.innerHTML = '<option value="all">' + t('allStaff') + '</option>';

        staffs.forEach(staff => {
            const opt = document.createElement('option');
            opt.value = staff;
            opt.textContent = staff;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }
    },
};

/* ================================================================
   EXPORT ENGINE
   ================================================================ */

const ExportEngine = {

    _timestamp() {
        const d = new Date();
        const pad = n => String(n).padStart(2, '0');
        return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '_' + pad(d.getHours()) + pad(d.getMinutes());
    },

    _sanitizeSheetName(name, usedNames) {
        let clean = String(name).replace(/[:\\/\?\*\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
        if (clean.length > 31) clean = clean.slice(0, 31);
        if (!clean) clean = 'Sheet';
        const base = clean;
        let counter = 1;
        while (usedNames[clean]) {
            const suffix = '_' + counter;
            clean = base.slice(0, 31 - suffix.length) + suffix;
            counter++;
        }
        usedNames[clean] = true;
        return clean;
    },

    getFilterInfoText(kind) {
        if (kind === 'mtm') {
            const mf = appState.mtmFilters;
            const mtmPeriod = (mf.monthFrom && mf.monthTo) ?
                (mf.monthFrom.replace(/\[\d+\]\s*/, '') + ' - ' + mf.monthTo.replace(/\[\d+\]\s*/, '')) :
                t('allData');
            const mtmDimension = (mf.staff && mf.staff !== 'all') ? (t('thStaff') + '=' + mf.staff) : t('allData');
            return t('period') + ': ' + mtmPeriod + ' | ' + t('dimension') + ': ' + mtmDimension;
        }

        const filters = appState.filters;
        const periodParts = [];
        if (filters.month !== 'all') periodParts.push(filters.month.replace(/\[\d+\]\s*/, ''));
        if (filters.week !== 'all') periodParts.push(filters.week);
        const periodText = periodParts.length ? periodParts.join(' / ') : t('allMonths');

        const dateRangeText = (filters.dateFrom || filters.dateTo) ?
            ((filters.dateFrom || '…') + ' ' + t('to') + ' ' + (filters.dateTo || '…')) : '-';

        const dimensionParts = [];
        if (kind === 'task') {
            if (filters.taskStaff !== 'all') dimensionParts.push(t('thStaff') + '=' + filters.taskStaff);
        } else {
            if (filters.product !== 'all') dimensionParts.push(t('prodTitle') + '=' + filters.product);
            if (filters.tier !== 'all') dimensionParts.push(t('tierTitle') + '=' + Utils.String.formatTier(filters.tier));
            if (filters.staff !== 'all') dimensionParts.push(t('thStaff') + '=' + filters.staff);
            if (filters.shift !== 'all') dimensionParts.push(t('shiftTitle') + '=' + filters.shift);
        }
        const dimensionText = dimensionParts.length ? dimensionParts.join(', ') : t('allData');

        return t('period') + ': ' + periodText + ' | ' + t('dateRange') + ': ' + dateRangeText + ' | ' + t('dimension') + ': ' + dimensionText;
    },

    buildTicketSections() {
        const tickets = appState.filteredTickets;
        const kpi = DataProcessor.calculateKPIs(tickets);
        const artCur = DataProcessor.calculateART(appState.filteredResponseTimes, appState.filters.staff, appState.meta.responseTimeStaffCols);
        const sections = [];

        sections.push({
            name: t('overview'),
            header: [t('mtmMetricHeader'), 'Value'],
            rows: [
                [t('totalTickets'), kpi.total],
                [t('closed'), kpi.closed],
                [t('issue'), kpi.issue],
                [t('nonIssue'), kpi.nonIssue],
                [t('activeEsc'), kpi.activeEsc],
                [t('aht'), Utils.Duration.formatAHT(kpi.aht)],
                [t('avgResponseTime'), artCur.count > 0 ? Utils.Duration.formatAHT(artCur.avgMinutes) : '-'],
                [t('sla'), kpi.slaRate.toFixed(1) + '%'],
            ],
        });

        const esc = DataProcessor.calculateEscalationStats(tickets);
        sections.push({
            name: t('escalation'),
            header: [t('mtmMetricHeader'), 'Value'],
            rows: [
                [t('escTotal'), esc.total],
                [t('escActive'), esc.active],
                [t('escClosed'), esc.closed],
                [t('escRate'), esc.rate.toFixed(1) + '%'],
            ],
        });

        if (esc.byProduct.length) {
            sections.push({
                name: t('escByProduct'),
                header: [t('prodTitle'), t('totalTickets'), t('escActive')],
                rows: esc.byProduct.map(x => [x.label, x.total, x.active]),
            });
        }
        if (esc.byTier.length) {
            sections.push({
                name: t('escByTier'),
                header: [t('tierTitle'), t('totalTickets'), t('escActive')],
                rows: esc.byTier.map(x => [x.label, x.total, x.active]),
            });
        }
        if (esc.byType.length) {
            sections.push({
                name: t('escByType'),
                header: ['Type', t('totalTickets'), t('escActive')],
                rows: esc.byType.map(x => [x.name, x.total, x.active]),
            });
        }
        if (esc.activeRows.length) {
            sections.push({
                name: t('activeEsc'),
                header: [t('thClient'), t('thTask'), t('thTag'), t('thStatus'), t('thDate'), t('thEscalatedto')],
                rows: esc.activeRows.map(r => [r.client, r.problem, r.product, r.priority, r.date, r.escalatedTo]),
            });
        }

        const pri = DataProcessor.preparePriorityData(tickets);
        sections.push({
            name: t('priTitle'),
            header: [t('priTitle'), t('totalTickets')],
            rows: pri.labels.map((l, i) => [l, pri.values[i]]),
        });

        const tier = DataProcessor.prepareTierData(tickets);
        sections.push({
            name: t('tierTitle'),
            header: [t('tierTitle'), t('issue'), t('nonIssue'), t('total')],
            rows: tier.labels.map((l, i) => [l, tier.issue[i], tier.nonIssue[i], tier.totals[i]]),
        });

        const prod = DataProcessor.prepareProductData(tickets);
        sections.push({
            name: t('prodTitle'),
            header: [t('prodTitle'), t('issue'), t('nonIssue')],
            rows: prod.labels.map((l, i) => [l, prod.issue[i], prod.nonIssue[i]]),
        });

        const staff = DataProcessor.prepareStaffData(tickets);
        sections.push({
            name: t('staffTitle'),
            header: [t('staffTitle'), t('totalTickets')],
            rows: staff.labels.map((l, i) => [l, staff.values[i]]),
        });

        const trend7 = DataProcessor.prepareTrendData(appState.tickets);
        sections.push({
            name: t('trendTitle'),
            header: [t('trendTitle'), t('issue'), t('nonIssue')],
            rows: trend7.labels.map((l, i) => [l, trend7.issue[i], trend7.nonIssue[i]]),
        });

        const trend6m = DataProcessor.prepare6MonthTrendData(appState.tickets);
        sections.push({
            name: t('trend6MTitle'),
            header: [t('trend6MTitle'), t('issue'), t('nonIssue')],
            rows: trend6m.labels.map((l, i) => [l, trend6m.issue[i], trend6m.nonIssue[i]]),
        });

        const shift = DataProcessor.prepareShiftData(tickets);
        sections.push({
            name: t('shiftTitle'),
            header: [t('shiftTitle'), t('issue'), t('nonIssue'), t('total')],
            rows: shift.labels.map((l, i) => [l, shift.issue[i], shift.nonIssue[i], shift.totals[i]]),
        });

        const topClient = DataProcessor.prepareTopClientIssueData(tickets);
        sections.push({
            name: t('topClientTitle'),
            header: ['#', t('topClientNameHeader'), t('topClientTotalHeader')],
            rows: topClient.map((item, i) => [i + 1, item.name, item.count]),
        });

        return sections;
    },

    buildTaskSections() {
        const tasks = FilterEngine.applyTaskFilters(appState.tasks, appState.filters);
        const metrics = DataProcessor.calculateTaskMetrics(tasks);
        const sections = [];

        sections.push({
            name: t('taskOverview'),
            header: [t('mtmMetricHeader'), 'Value'],
            rows: [
                [t('totalTasks'), metrics.total],
                ['Done', metrics.done],
                ['Progress', metrics.progress],
                [t('totalWorkHours'), Utils.Duration.formatHMS(metrics.totalMinutes)],
            ],
        });

        const statusLabels = [];
        const statusData = [];
        if (metrics.done > 0) { statusLabels.push('Done');
            statusData.push(metrics.done); }
        if (metrics.progress > 0) { statusLabels.push('Progress');
            statusData.push(metrics.progress); }
        sections.push({
            name: t('taskStatusTitle'),
            header: [t('taskStatusTitle'), t('totalTasks')],
            rows: statusLabels.map((l, i) => [l, statusData[i]]),
        });

        const staffData = UIRenderer._prepareTaskStaffData(tasks);
        sections.push({
            name: t('taskStaffTitle'),
            header: [t('thStaff'), t('totalTasks')],
            rows: staffData.labels.map((l, i) => [l, staffData.values[i]]),
        });

        const taskRows = tasks.slice()
            .sort((a, b) => Utils.Date.parseTaskDate(b.start) - Utils.Date.parseTaskDate(a.start))
            .map(tk => {
                return [tk.staff, tk.task, tk.note || '-', Utils.Duration.formatHMS(Utils.Duration.parse(tk.duration)), tk.status, Utils.Date.formatTaskDate(tk.start)];
            });
        sections.push({
            name: t('taskTableTitle'),
            header: [t('thStaff'), t('thTask'), t('thTag'), 'Duration', t('thStatus'), t('thDate')],
            rows: taskRows,
        });

        return sections;
    },

    buildMTMSections() {
        const filters = appState.mtmFilters;
        const data = DataProcessor.prepareMonthlyComparison(appState.tickets, filters.monthFrom, filters.monthTo, appState.responseTimes, appState.tasks, filters.staff);
        if (!data || !data.buckets.length) return [];

        const buckets = data.buckets;
        const sections = [];

        const metricDefs = [
            { id: 'totalTickets', get: k => k.total },
            { id: 'closed', get: k => k.closed },
            { id: 'issue', get: k => k.issue },
            { id: 'nonIssue', get: k => k.nonIssue },
            { id: 'activeEsc', get: k => k.activeEsc },
            { id: 'totalTasks', get: k => k.totalTasks },
            { id: 'aht', get: k => Utils.Duration.formatAHT(k.aht) },
            { id: 'avgResponseTime', get: k => k.artCount > 0 ? Utils.Duration.formatAHT(k.artMinutes) : '-' },
            { id: 'fcrRate', get: k => k.fcrRate.toFixed(1) + '%' },
            { id: 'sla', get: k => k.slaRate.toFixed(1) + '%' },
        ];
        sections.push({
            name: t('mtmTableTitle'),
            header: [t('mtmMetricHeader')].concat(buckets.map(b => b.label)),
            rows: metricDefs.map(m => {
                return [t(m.id)].concat(buckets.map(b => m.get(b.kpi)));
            }),
        });

        sections.push({
            name: t('mtmPriorityTitle'),
            header: [t('mtmPriorityTitle')].concat(buckets.map(b => b.label)),
            rows: CONFIG.PRIORITIES.map(p => {
                return [p].concat(buckets.map(b => {
                    const idx = b.priority.labels.indexOf(p);
                    return idx !== -1 ? b.priority.values[idx] : 0;
                }));
            }),
        });

        const productData = DataProcessor.prepareMonthlyProductComparison(buckets);
        sections.push({
            name: t('mtmProdTitle'),
            header: [t('mtmProdTitle')].concat(productData.labels),
            rows: productData.datasets.map(ds => [ds.label].concat(ds.data)),
        });

        const staffCompareData = DataProcessor.prepareMonthlyStaffComparison(buckets);
        sections.push({
            name: t('mtmStaffTitle'),
            header: [t('mtmStaffTitle')].concat(staffCompareData.labels),
            rows: staffCompareData.datasets.map(ds => [ds.label].concat(ds.data)),
        });

        const taskStaffCompareData = DataProcessor.prepareMonthlyTaskStaffComparison(buckets);
        sections.push({
            name: t('mtmTaskStaffTitle'),
            header: [t('mtmTaskStaffTitle')].concat(taskStaffCompareData.labels),
            rows: taskStaffCompareData.datasets.map(ds => [ds.label].concat(ds.data)),
        });

        const shiftCompareData = DataProcessor.prepareMonthlyShiftComparison(buckets);
        sections.push({
            name: t('mtmShiftTitle'),
            header: [t('mtmShiftTitle')].concat(shiftCompareData.labels),
            rows: shiftCompareData.datasets.map(ds => [ds.label].concat(ds.data)),
        });

        return sections;
    },

    exportExcel(sections, filterText, filenamePrefix) {
        if (typeof XLSX === 'undefined') {
            console.error('XLSX library not loaded');
            return;
        }
        const wb = XLSX.utils.book_new();
        const usedNames = {};
        sections.forEach(sec => {
            const rows = [[filterText], []].concat([sec.header]).concat(sec.rows);
            const ws = XLSX.utils.aoa_to_sheet(rows);
            const sheetName = ExportEngine._sanitizeSheetName(sec.name, usedNames);
            XLSX.utils.book_append_sheet(wb, ws, sheetName);
        });
        XLSX.writeFile(wb, filenamePrefix + '_' + ExportEngine._timestamp() + '.xlsx');
    },

    exportCSV(sections, filterText, filenamePrefix) {
        const lines = [[filterText], []];
        sections.forEach(sec => {
            lines.push(['=== ' + sec.name + ' ===']);
            lines.push(sec.header);
            sec.rows.forEach(r => lines.push(r));
            lines.push([]);
        });
        const csv = Utils.CSV.rowsToCSV(lines);
        Utils.File.download('\uFEFF' + csv, filenamePrefix + '_' + ExportEngine._timestamp() + '.csv', 'text/csv;charset=utf-8;');
    },

    downloadTicket(format) {
        const sections = ExportEngine.buildTicketSections();
        const filterText = ExportEngine.getFilterInfoText('ticket');
        if (format === 'xlsx') ExportEngine.exportExcel(sections, filterText, 'Ticket_Report');
        else ExportEngine.exportCSV(sections, filterText, 'Ticket_Report');
    },

    downloadTask(format) {
        const sections = ExportEngine.buildTaskSections();
        const filterText = ExportEngine.getFilterInfoText('task');
        if (format === 'xlsx') ExportEngine.exportExcel(sections, filterText, 'Task_Report');
        else ExportEngine.exportCSV(sections, filterText, 'Task_Report');
    },

    downloadMTM(format) {
        const sections = ExportEngine.buildMTMSections();
        if (!sections.length) return;
        const filterText = ExportEngine.getFilterInfoText('mtm');
        if (format === 'xlsx') ExportEngine.exportExcel(sections, filterText, 'MTM_Report');
        else ExportEngine.exportCSV(sections, filterText, 'MTM_Report');
    },
};

/* ================================================================
   EVENT HANDLERS
   ================================================================ */

const EventHandlers = {

    init() {
        const filterIds = ['filterMonth', 'filterWeek', 'filterProduct', 'filterTier', 'filterShift', 'filterStaff', 'filterTaskStaff'];
        const self = this;

        filterIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => self.onFilterChange());
        });

        ['filterDateFrom', 'filterDateTo'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => self.onFilterChange());
        });

        const resetBtn = document.getElementById('btnResetFilters');
        if (resetBtn) resetBtn.addEventListener('click', () => self.onResetFilters());

        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', function () {
                const menu = this.dataset.menu;
                if (menu) self.onMenuChange(menu);
            });
        });

        document.getElementById('btnLang')?.addEventListener('click', function () {
            const currentLang = appState.ui.language;
            const newLang = currentLang === 'id' ? 'en' : 'id';
            self.onLanguageChange(newLang);
        });

        document.getElementById('btnTheme')?.addEventListener('click', function () {
            toggleTheme();
            self.refreshUI();
            if (appState.ui.currentMenu === 'mtm') UIRenderer.renderMTM();
        });

        document.getElementById('btnRefresh')?.addEventListener('click', () => self.onRefresh());
        document.getElementById('syncBadge')?.addEventListener('click', () => self.onRefresh());
        document.getElementById('btnFullscreen')?.addEventListener('click', () => self.onToggleFullscreen());

        const searchInput = document.getElementById('taskSearchInput');
        if (searchInput) {
            const debounced = Utils.debounce(() => self.onTaskSearch(), 300);
            searchInput.addEventListener('input', debounced);
        }

        ['taskFilterStaffSelect', 'taskFilterStatusSelect'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => self.onTaskFilterChange());
        });

        ['filterMTMMonthFrom', 'filterMTMMonthTo', 'filterMTMStaff'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => self.onMTMFilterChange());
        });

        const resetMTMBtn = document.getElementById('btnResetMTMFilters');
        if (resetMTMBtn) resetMTMBtn.addEventListener('click', () => self.onResetMTMFilters());

        const btnDownloadTicket = document.getElementById('btnDownloadTicket');
        if (btnDownloadTicket) {
            btnDownloadTicket.addEventListener('click', function (e) {
                e.stopPropagation();
                document.getElementById('downloadMenuTicket').classList.toggle('is-open');
            });
        }
        document.querySelectorAll('#downloadMenuTicket .download-menu-item').forEach(item => {
            item.addEventListener('click', function (e) {
                e.stopPropagation();
                const format = this.dataset.format;
                document.getElementById('downloadMenuTicket').classList.remove('is-open');
                if (appState.ui.currentMenu === 'task') {
                    ExportEngine.downloadTask(format);
                } else {
                    ExportEngine.downloadTicket(format);
                }
            });
        });

        const btnDownloadMTM = document.getElementById('btnDownloadMTM');
        if (btnDownloadMTM) {
            btnDownloadMTM.addEventListener('click', function (e) {
                e.stopPropagation();
                document.getElementById('downloadMenuMTM').classList.toggle('is-open');
            });
        }
        document.querySelectorAll('#downloadMenuMTM .download-menu-item').forEach(item => {
            item.addEventListener('click', function (e) {
                e.stopPropagation();
                const format = this.dataset.format;
                document.getElementById('downloadMenuMTM').classList.remove('is-open');
                ExportEngine.downloadMTM(format);
            });
        });

        document.addEventListener('click', () => {
            document.querySelectorAll('.download-menu.is-open').forEach(m => m.classList.remove('is-open'));
        });

        document.getElementById('topClientModalClose')?.addEventListener('click', () => UIRenderer._hideTopClientModal());
        document.getElementById('topClientModalOverlay')?.addEventListener('click', function (e) {
            if (e.target === this) UIRenderer._hideTopClientModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') UIRenderer._hideTopClientModal();
        });
    },

    _validateDateRange() {
        const fromInput = document.getElementById('filterDateFrom');
        const toInput = document.getElementById('filterDateTo');
        const errorEl = document.getElementById('filterDateError');
        if (!fromInput || !toInput) return true;

        const fromVal = fromInput.value;
        const toVal = toInput.value;
        let isInvalid = false;

        if (fromVal && toVal) {
            const from = Utils.Date.parseDateInput(fromVal);
            const to = Utils.Date.parseDateInput(toVal);
            if (from && to && to < from) isInvalid = true;
        }

        fromInput.classList.toggle('invalid', isInvalid);
        toInput.classList.toggle('invalid', isInvalid);

        if (errorEl) {
            errorEl.textContent = isInvalid ? t('dateRangeError') : '';
            errorEl.classList.toggle('show', isInvalid);
        }

        return !isInvalid;
    },

    _readMTMFilters() {
        appState.mtmFilters.monthFrom = document.getElementById('filterMTMMonthFrom')?.value || '';
        appState.mtmFilters.monthTo = document.getElementById('filterMTMMonthTo')?.value || '';
        appState.mtmFilters.staff = document.getElementById('filterMTMStaff')?.value || 'all';
    },

    _setDefaultMTMPeriod() {
        const fromSelect = document.getElementById('filterMTMMonthFrom');
        const toSelect = document.getElementById('filterMTMMonthTo');
        if (!fromSelect || !toSelect || !fromSelect.options.length || !toSelect.options.length) return;

        const now = new Date();
        const prevDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);

        const curCandidates = [
            now.toLocaleDateString('en-US', { month: 'long' }) + ' - ' + now.getFullYear(),
            now.toLocaleDateString('id-ID', { month: 'long' }) + ' - ' + now.getFullYear(),
        ].map(s => s.trim().toLowerCase());

        const prevCandidates = [
            prevDate.toLocaleDateString('en-US', { month: 'long' }) + ' - ' + prevDate.getFullYear(),
            prevDate.toLocaleDateString('id-ID', { month: 'long' }) + ' - ' + prevDate.getFullYear(),
        ].map(s => s.trim().toLowerCase());

        const findMatch = (select, candidates) => {
            for (let i = 0; i < select.options.length; i++) {
                const opt = select.options[i];
                const clean = opt.value.replace(/\[\d+\]\s*/, '').trim().toLowerCase();
                if (candidates.indexOf(clean) !== -1) return opt.value;
            }
            return null;
        };

        let toMatch = findMatch(toSelect, curCandidates);
        let fromMatch = findMatch(fromSelect, prevCandidates);

        if (!toMatch || !fromMatch) {
            const opts = Array.prototype.map.call(toSelect.options, o => o.value);
            if (opts.length >= 2) {
                if (!fromMatch) fromMatch = opts[opts.length - 2];
                if (!toMatch) toMatch = opts[opts.length - 1];
            } else if (opts.length === 1) {
                fromMatch = toMatch = opts[0];
            }
        }

        if (fromMatch) fromSelect.value = fromMatch;
        if (toMatch) toSelect.value = toMatch;
    },

    onMTMFilterChange() {
        this._readMTMFilters();
        UIRenderer.renderMTM();
    },

    onResetMTMFilters() {
        this._setDefaultMTMPeriod();
        const staffSelect = document.getElementById('filterMTMStaff');
        if (staffSelect) staffSelect.value = 'all';
        this._readMTMFilters();
        UIRenderer.renderMTM();
    },

    onFilterChange() {
        if (!this._validateDateRange()) {
            return;
        }
        this.validateFilters();
        this._applyFilters();
        appState.ui.topClientPage = 1;
        this.refreshUI();
    },

    onResetFilters() {
        const defaults = {
            filterMonth: 'all',
            filterWeek: 'all',
            filterProduct: 'all',
            filterTier: 'all',
            filterShift: 'all',
            filterStaff: 'all',
            filterTaskStaff: 'all',
            filterDateFrom: '',
            filterDateTo: '',
        };

        Object.keys(defaults).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.value = defaults[id];
                el.disabled = false;
                el.style.opacity = '1';
                el.style.cursor = 'pointer';
            }
        });

        this._validateDateRange();
        this.validateFilters();
        this._applyFilters();
        appState.ui.topClientPage = 1;
        this.refreshUI();
    },

    onMenuChange(menu) {
        appState.ui.currentMenu = menu;

        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.menu === menu);
            tab.setAttribute('aria-selected', tab.dataset.menu === menu);
        });

        document.querySelectorAll('.menu-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === 'panel' + Utils.String.capitalize(menu));
        });

        const filterBar = document.querySelector('.filter-bar');
        if (filterBar) filterBar.style.display = menu === 'mtm' ? 'none' : '';

        const dimGroup = document.getElementById('filterDimensionGroup');
        const taskDimGroup = document.getElementById('filterTaskDimensionGroup');
        const dimSep = document.getElementById('filterSeparatorDim');
        if (dimGroup) dimGroup.style.display = menu === 'ticket' ? '' : 'none';
        if (taskDimGroup) taskDimGroup.style.display = menu === 'task' ? '' : 'none';
        if (dimSep) dimSep.style.display = '';

        if (menu === 'mtm') {
            UIRenderer.renderMTM();
        }

        UIRenderer.scrollToTop();
    },

    onLanguageChange(lang) {
        appState.ui.language = lang;
        const btnLang = document.getElementById('btnLang');
        if (btnLang) {
            btnLang.textContent = lang === 'id' ? '🌐 ID' : '🌐 EN';
            btnLang.classList.toggle('on', lang === 'id');
        }
        document.documentElement.setAttribute('lang', lang);
        this.applyStaticTranslations();
        UIRenderer._populateMTMMonthRangeFilters(appState.tickets);
        this._validateDateRange();
        this.refreshUI();
        if (appState.ui.currentMenu === 'mtm') UIRenderer.renderMTM();
    },

    applyStaticTranslations() {
        const map = {
            appTitle: 'appTitle',
            loginTitle: 'appTitle',
            loginSubtitle: 'loginSubtitle',
            loginUsernameLabel: 'loginUsernameLabel',
            loginPasswordLabel: 'loginPasswordLabel',
            loginBtnSubmit: 'loginBtnSubmit',
            lblMenuTicket: 'menuTicket',
            lblMenuTask: 'menuTask',
            lblPeriod: 'period',
            lblDateRange: 'dateRange',
            lblDimension: 'dimension',
            lblTaskDimension: 'dimension',
            lblDateTo: 'to',
            optAllMonths: 'allMonths',
            optAllWeeks: 'allWeeks',
            optAllProducts: 'allProducts',
            optAllTiers: 'allTiers',
            optAllShifts: 'allShifts',
            optAllStaffTicket: 'allStaff',
            btnResetFilters: 'reset',
            lblOverview: 'overview',
            lblEscalation: 'escalation',
            lblDistribution: 'distribution',
            lblTrend: 'trend',
            chartPriTitle: 'priTitle', chartPriSub: 'priSub',
            chartTierTitle: 'tierTitle', chartTierSub: 'tierSub',
            chartProdTitle: 'prodTitle', chartProdSub: 'prodSub',
            chartStaffTitle: 'staffTitle', chartStaffSub: 'staffSub',
            chartTrendTitle: 'trendTitle', chartTrendSub: 'trendSub',
            chartTrend6MTitle: 'trend6MTitle', chartTrend6MSub: 'trend6MSub',
            chartShiftTitle: 'shiftTitle',
            lblTaskOverview: 'taskOverview',
            chartTaskStatusTitle: 'taskStatusTitle', chartTaskStatusSub: 'taskStatusSub',
            chartTaskStaffTitle: 'taskStaffTitle', chartTaskStaffSub: 'taskStaffSub',
            chartTaskTableTitle: 'taskTableTitle', chartTaskTableSub: 'taskTableSub',
            chartTopClientTitle: 'topClientTitle', chartTopClientSub: 'topClientSub',
            thTopClientName: 'topClientNameHeader',
            thTopClientTotal: 'topClientTotalHeader',
            chartRecentIncidentTitle: 'recentIncidentTitle', chartRecentIncidentSub: 'recentIncidentSub',
            thIncidentStart: 'thIncidentStart',
            thIncidentEnd: 'thIncidentEnd',
            thIncidentProduct: 'thIncidentProduct',
            thIncidentProblem: 'thIncidentProblem',
            thIncidentRootCause: 'thIncidentRootCause',
            thIncidentDuration: 'thIncidentDuration',
            optTaskAllStaff: 'taskAllStaff',
            optTaskAllStatus: 'taskAllStatus',
            thTaskStaff: 'thStaff',
            lblMenuMTM: 'menuMTM',
            lblMTMOverview: 'mtmOverview',
            lblMTMDateTo: 'to',
            lblMTMPeriod: 'period',
            lblMTMDimension: 'dimension',
            optAllStaffMTM: 'allStaff',
            chartMTMProdTitle: 'mtmProdTitle', chartMTMProdSub: 'mtmProdSub',
            chartMTMStaffTitle: 'mtmStaffTitle', chartMTMStaffSub: 'mtmStaffSub',
            chartMTMTaskStaffTitle: 'mtmTaskStaffTitle', chartMTMTaskStaffSub: 'mtmTaskStaffSub',
            chartMTMShiftTitle: 'mtmShiftTitle',
            btnResetMTMFilters: 'reset',
            lblDownload: 'download',
            lblDownloadMTM: 'download',
            mtmEmptyText: 'mtmEmptyText',
            mtmTableTitle: 'mtmTableTitle',
            mtmTableSub: 'mtmTableSub',
            mtmVolumeTitle: 'mtmVolumeTitle',
            mtmVolumeSub: 'mtmVolumeSub',
            mtmClosedTitle: 'mtmClosedTitle',
            mtmClosedSub: 'mtmClosedSub',
            mtmIssueTitle: 'mtmIssueTitle',
            mtmIssueSub: 'mtmIssueSub',
            mtmNonIssueTitle: 'mtmNonIssueTitle',
            mtmNonIssueSub: 'mtmNonIssueSub',
            mtmActiveEscTitle: 'mtmActiveEscTitle',
            mtmActiveEscSub: 'mtmActiveEscSub',
            mtmARTTitle: 'mtmARTTitle',
            mtmARTSub: 'mtmARTSub',
            mtmAHTTitle: 'mtmAHTTitle',
            mtmAHTSub: 'mtmAHTSub',
            mtmSLATitle: 'mtmSLATitle',
            mtmSLASub: 'mtmSLASub',
            mtmPriorityTitle: 'mtmPriorityTitle',
            mtmPrioritySub: 'mtmPrioritySub',
            footerText: 'footer',
            incidentModalTitle: 'incidentModalTitle',
            lblIncidentStart: 'lblIncidentStart',
            lblIncidentEnd: 'lblIncidentEnd',
            lblIncidentDuration: 'lblIncidentDuration',
            lblIncidentProduct: 'lblIncidentProduct',
            lblIncidentProblem: 'lblIncidentProblem',
            lblIncidentRootCause: 'lblIncidentRootCause',
            incidentCancelBtn: 'incidentCancelBtn',
            incidentSaveBtn: 'incidentSaveBtn',
        };
        Object.keys(map).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = t(map[id]);
        });

        const searchInput = document.getElementById('taskSearchInput');
        if (searchInput) searchInput.placeholder = t('taskSearchPlaceholder');

        const incidentLabel = document.getElementById('incidentBtnLabel');
        if (incidentLabel) {
            incidentLabel.textContent = IncidentTracker.startTime ? t('incidentBtnStop') : t('incidentBtnStart');
        }
    },

    onRefresh() {
        this._refreshData();
    },

    onToggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.warn('Fullscreen request failed:', err);
            });
        } else {
            document.exitFullscreen();
        }
    },

    onTaskSearch() {
        const input = document.getElementById('taskSearchInput');
        appState.ui.taskSearch = input ? input.value.toLowerCase() : '';
        appState.ui.taskPage = 1;
        UIRenderer.renderTaskTable(appState.filteredTasks);
    },

    onTaskFilterChange() {
        const staffSelect = document.getElementById('taskFilterStaffSelect');
        const statusSelect = document.getElementById('taskFilterStatusSelect');
        appState.ui.taskFilterStaff = staffSelect ? staffSelect.value : 'all';
        appState.ui.taskFilterStatus = statusSelect ? statusSelect.value : 'all';
        appState.ui.taskPage = 1;
        UIRenderer.renderTaskTable(appState.filteredTasks);
    },

    _readFilters() {
        appState.filters.month = document.getElementById('filterMonth')?.value || 'all';
        appState.filters.week = document.getElementById('filterWeek')?.value || 'all';
        appState.filters.dateFrom = document.getElementById('filterDateFrom')?.value || '';
        appState.filters.dateTo = document.getElementById('filterDateTo')?.value || '';
        appState.filters.product = document.getElementById('filterProduct')?.value || 'all';
        appState.filters.tier = document.getElementById('filterTier')?.value || 'all';
        appState.filters.shift = document.getElementById('filterShift')?.value || 'all';
        appState.filters.staff = document.getElementById('filterStaff')?.value || 'all';
        appState.filters.taskStaff = document.getElementById('filterTaskStaff')?.value || 'all';
    },

    _applyFilters() {
        const filters = appState.filters;
        appState.filteredTickets = FilterEngine.applyTicketFilters(appState.tickets, filters);
        appState.filteredTasks = FilterEngine.applyTaskFilters(appState.tasks, filters);
        appState.filteredResponseTimes = FilterEngine.applyResponseTimeFilters(appState.responseTimes, filters);

        const totalPages = Utils.Array.totalPages(appState.filteredTasks, CONFIG.PAGINATION.pageSize);
        if (appState.ui.taskPage > totalPages) appState.ui.taskPage = totalPages || 1;
    },

    _refreshData() {
        const self = this;
        UIRenderer.updateSyncStatus('syncing', null);

        DataLoader.load().then(success => {
            if (success) {
                UIRenderer.updateSyncStatus('live', appState.meta.lastSync);
            } else if (window.location.protocol === 'file:') {
                UIRenderer.updateSyncStatus('fileproto', null);
            } else {
                UIRenderer.updateSyncStatus('error', null);
            }

            appState.ui.taskPage = 1;
            appState.ui.topClientPage = 1;

            self._applyFilters();
            self.refreshUI();
            if (appState.ui.currentMenu === 'mtm') UIRenderer.renderMTM();

            UIRenderer.scrollToTop();
        });
    },

    refreshUI() {
        const tickets = appState.filteredTickets;
        const tasks = appState.filteredTasks;
        const filters = appState.filters;

        UIRenderer.populateDynamicFilters(appState.tickets, appState.tasks);

        const prevTicketData = DataProcessor.getPreviousPeriodData(appState.tickets, filters);
        const filterSummary = FilterEngine.getFilterSummary(filters);

        const prevRtRows = FilterEngine.getPreviousResponseTimeData(appState.responseTimes, filters);
        const artCur = DataProcessor.calculateART(appState.filteredResponseTimes, filters.staff, appState.meta.responseTimeStaffCols);
        const artPrev = DataProcessor.calculateART(prevRtRows, filters.staff, appState.meta.responseTimeStaffCols);

        UIRenderer.renderKPI(tickets, prevTicketData, filterSummary, null, null, { cur: artCur, prev: artPrev });
        UIRenderer.renderEscalation(tickets);
        UIRenderer.renderCharts(tickets);
        UIRenderer._renderTopClientTable(tickets);
        UIRenderer._renderRecentIncidentsTable(appState.incidents);
        UIRenderer.renderTaskSection(appState.tasks, filters);

        this.validateFilters();

        UIRenderer.scrollToTop();
    },

    _applyWeekDependency(monthSelect, weekSelect) {
        const monthSelected = monthSelect.value !== 'all';
        if (!monthSelected) {
            if (weekSelect.value !== 'all') weekSelect.value = 'all';
            weekSelect.disabled = true;
            weekSelect.style.opacity = '0.5';
            weekSelect.style.cursor = 'not-allowed';
        } else {
            weekSelect.disabled = false;
            weekSelect.style.opacity = '1';
            weekSelect.style.cursor = 'pointer';
        }
    },

    validateFilters() {
        const monthSelect = document.getElementById('filterMonth');
        const weekSelect = document.getElementById('filterWeek');
        const dateFromInput = document.getElementById('filterDateFrom');
        const dateToInput = document.getElementById('filterDateTo');
        if (!monthSelect || !weekSelect || !dateFromInput || !dateToInput) return;

        const month = monthSelect.value || 'all';
        const week = weekSelect.value || 'all';
        const isPeriodSelected = (month !== 'all' || week !== 'all');

        if (isPeriodSelected) {
            const range = getDateRangeFromFilters(appState.tickets, month, week);
            dateFromInput.value = range.from || '';
            dateToInput.value = range.to || '';
            appState.ui.dateAutoFilled = true;

            dateFromInput.disabled = true;
            dateToInput.disabled = true;
            dateFromInput.style.opacity = '0.5';
            dateToInput.style.opacity = '0.5';
            dateFromInput.style.cursor = 'not-allowed';
            dateToInput.style.cursor = 'not-allowed';

            monthSelect.disabled = false;
            monthSelect.style.opacity = '1';
            monthSelect.style.cursor = 'pointer';
            this._applyWeekDependency(monthSelect, weekSelect);

        } else {
            if (appState.ui.dateAutoFilled) {
                dateFromInput.value = '';
                dateToInput.value = '';
                appState.ui.dateAutoFilled = false;
            }

            dateFromInput.disabled = false;
            dateToInput.disabled = false;
            dateFromInput.style.opacity = '1';
            dateToInput.style.opacity = '1';
            dateFromInput.style.cursor = 'pointer';
            dateToInput.style.cursor = 'pointer';

            const dateFrom = dateFromInput.value || '';
            const dateTo = dateToInput.value || '';
            const isDateRangeSelected = (dateFrom !== '' || dateTo !== '');

            if (isDateRangeSelected) {
                monthSelect.value = 'all';
                weekSelect.value = 'all';
                monthSelect.disabled = true;
                weekSelect.disabled = true;
                monthSelect.style.opacity = '0.5';
                weekSelect.style.opacity = '0.5';
                monthSelect.style.cursor = 'not-allowed';
                weekSelect.style.cursor = 'not-allowed';
            } else {
                monthSelect.disabled = false;
                monthSelect.style.opacity = '1';
                monthSelect.style.cursor = 'pointer';
                this._applyWeekDependency(monthSelect, weekSelect);
            }
        }

        this._readFilters();
    },
};

/* ================================================================
   HELPER FUNCTIONS
   ================================================================ */

function getDateRangeFromFilters(tickets, month, week) {
    let filtered = tickets;

    if (month !== 'all') {
        filtered = filtered.filter(r => r.month === month);
    }
    if (week !== 'all') {
        filtered = filtered.filter(r => r.week === week);
    }

    if (filtered.length === 0) {
        return { from: '', to: '' };
    }

    const dates = filtered.map(r => Utils.Date.parseDate(r.date)).filter(d => d && !isNaN(d));
    if (dates.length === 0) {
        return { from: '', to: '' };
    }

    dates.sort((a, b) => a - b);

    const fromDate = dates[0];
    const toDate = dates[dates.length - 1];

    const formatDate = d => {
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const yyyy = d.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };

    return {
        from: formatDate(fromDate),
        to: formatDate(toDate)
    };
}

/* ================================================================
   LOADING OVERLAY
   ================================================================ */

const LoadingOverlay = {
    _timer: null,
    _rushTimer: null,
    _current: 0,
    _target: 0,
    _finished: false,

    start() {
        const overlay = document.getElementById('appLoadingOverlay');
        if (!overlay) return;

        this._current = 0;
        this._target = 0;
        this._finished = false;

        overlay.style.display = 'flex';
        overlay.classList.remove('is-hidden');

        const labelEl = document.getElementById('appLoadingLabel');
        if (labelEl) labelEl.textContent = t('loadingLabel');
        this._render();

        const self = this;
        clearInterval(this._timer);
        this._timer = setInterval(() => {
            if (self._target < 90) {
                self._target = Math.min(90, self._target + (Math.random() * 4 + 1));
            }
            if (self._current < self._target) {
                self._current += 1;
                self._render();
            }
        }, 100);
    },

    _render() {
        const countEl = document.getElementById('appLoadingCount');
        const barEl = document.getElementById('appLoadingBarFill');
        const val = Math.min(100, Math.round(this._current));
        if (countEl) countEl.textContent = val;
        if (barEl) barEl.style.width = val + '%';
    },

    finish() {
        if (this._finished) return;
        this._finished = true;

        const overlay = document.getElementById('appLoadingOverlay');
        if (!overlay) {
            clearInterval(this._timer);
            return;
        }

        const self = this;
        clearInterval(this._rushTimer);
        this._rushTimer = setInterval(() => {
            self._current += 3;
            if (self._current >= 100) {
                self._current = 100;
                self._render();
                clearInterval(self._rushTimer);
                clearInterval(self._timer);

                setTimeout(() => {
                    overlay.classList.add('is-hidden');
                    setTimeout(() => overlay.style.display = 'none', 400);
                }, 200);
                return;
            }
            self._render();
        }, 20);
    },
};

/* ================================================================
   AUTHENTICATION
   ================================================================ */

const Auth = {

    isAuthenticated() {
        return sessionStorage.getItem(CONFIG.AUTH.sessionKey) === '1';
    },

    login(username, password) {
        if (username === CONFIG.AUTH.username && password === CONFIG.AUTH.password) {
            sessionStorage.setItem(CONFIG.AUTH.sessionKey, '1');
            return true;
        }
        return false;
    },

    logout() {
        sessionStorage.removeItem(CONFIG.AUTH.sessionKey);
        location.reload();
    },

    hideLoginScreen() {
        const el = document.getElementById('loginScreen');
        if (el) el.classList.add('is-hidden');
    },

    showLoginScreen() {
        const el = document.getElementById('loginScreen');
        if (el) el.classList.remove('is-hidden');
    },

    init() {
        const form = document.getElementById('loginForm');
        const errorEl = document.getElementById('loginError');
        if (!form) return;

        form.addEventListener('submit', e => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;

            if (this.login(username, password)) {
                if (errorEl) errorEl.textContent = '';
                this.hideLoginScreen();
                App.init();
            } else {
                if (errorEl) errorEl.textContent = t('loginErrorInvalid');
            }
        });

        document.getElementById('btnLogout')?.addEventListener('click', () => this.logout());
    },
};

/* ================================================================
   APPLICATION INITIALIZATION
   ================================================================ */

const App = {

    init() {
        const self = this;
        LoadingOverlay.start();

        DataLoader.load().then(success => {
            if (success) {
                UIRenderer.updateSyncStatus('live', appState.meta.lastSync);
            } else if (window.location.protocol === 'file:') {
                UIRenderer.updateSyncStatus('fileproto', null);
            } else {
                UIRenderer.updateSyncStatus('error', null);
            }

            document.documentElement.setAttribute('data-theme', appState.ui.theme);
            document.documentElement.setAttribute('lang', appState.ui.language);
            document.getElementById('btnTheme').textContent = appState.ui.theme === 'dark' ? '🌙' : '☀️';

            EventHandlers.applyStaticTranslations();
            UIRenderer.populateDynamicFilters(appState.tickets, appState.tasks);
            self._setDefaultMonthFilter();
            EventHandlers._setDefaultMTMPeriod();
            EventHandlers._readMTMFilters();

            EventHandlers._readFilters();
            EventHandlers._applyFilters();
            EventHandlers.init();
            EventHandlers.refreshUI();

            LoadingOverlay.finish();

            setInterval(() => {
                EventHandlers.onRefresh();
            }, CONFIG.APP.refreshInterval);

            console.log(CONFIG.APP.name + ' v' + CONFIG.APP.version + ' initialized');
            console.log('Data source: ' + appState.meta.dataSource);
            console.log('Tickets: ' + appState.tickets.length + ', Tasks: ' + appState.tasks.length);
        });
    },

    _setDefaultMonthFilter() {
        const monthSelect = document.getElementById('filterMonth');
        if (!monthSelect) return;
        const now = new Date();
        const candidates = [
            now.toLocaleDateString('en-US', { month: 'long' }) + ' - ' + now.getFullYear(),
            now.toLocaleDateString('id-ID', { month: 'long' }) + ' - ' + now.getFullYear(),
        ].map(s => s.trim().toLowerCase());
        let match = null;
        for (let i = 0; i < monthSelect.options.length; i++) {
            const opt = monthSelect.options[i];
            if (opt.value === 'all') continue;
            const clean = opt.value.replace(/\[\d+\]\s*/, '').trim().toLowerCase();
            if (candidates.indexOf(clean) !== -1) {
                match = opt;
                break;
            }
        }
        if (match) monthSelect.value = match.value;
    },
};

/* ================================================================
   AUTO SCROLL
   ================================================================ */

const AutoScroll = {
    active: false,
    speed: 3,
    direction: 'down',
    rafId: null,
    lastTime: null,
    speedMap: { 1: 0.35, 2: 0.28, 3: 0.21, 4: 0.14, 5: 0.07 },
    fastReturnSpeed: 1.4,

    init() {
        const self = this;

        document.querySelectorAll('.as-speed-bar').forEach(btn => {
            btn.addEventListener('click', function () {
                const level = parseInt(this.dataset.speed, 10);
                self.setSpeed(level);
                self.start();
            });
        });

        const playStopBtn = document.getElementById('autoScrollPlayStopBtn');
        if (playStopBtn) playStopBtn.addEventListener('click', () => self.toggle());

        document.addEventListener('fullscreenchange', () => self._onFullscreenChange());
    },

    _onFullscreenChange() {
        const panel = document.getElementById('autoScrollPanel');
        if (!panel) return;
        const isFullscreen = !!document.fullscreenElement;
        panel.classList.toggle('is-visible', isFullscreen);
        if (!isFullscreen) this.stop();
    },

    setSpeed(level) {
        this.speed = level;
        document.querySelectorAll('.as-speed-bar').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.speed, 10) === level);
        });
    },

    toggle() {
        if (this.active) {
            this.stop();
        } else {
            this.start();
        }
    },

    _updatePlayStopBtn() {
        const btn = document.getElementById('autoScrollPlayStopBtn');
        if (!btn) return;
        if (this.active) {
            btn.innerHTML = '&#9724;';
            btn.classList.add('is-playing');
            btn.title = 'Stop auto scroll';
            btn.setAttribute('aria-label', 'Stop auto scroll');
        } else {
            btn.innerHTML = '&#9654;';
            btn.classList.remove('is-playing');
            btn.title = 'Play auto scroll';
            btn.setAttribute('aria-label', 'Play auto scroll');
        }
    },

    start() {
        const self = this;
        this.active = true;
        this.direction = 'down';
        this.lastTime = null;

        this._updatePlayStopBtn();

        if (this.rafId) cancelAnimationFrame(this.rafId);
        this.rafId = requestAnimationFrame(ts => self._tick(ts));
    },

    stop() {
        this.active = false;
        if (this.rafId) cancelAnimationFrame(this.rafId);
        this.rafId = null;
        this.lastTime = null;

        this._updatePlayStopBtn();
    },

    _tick(timestamp) {
        if (!this.active) return;
        const self = this;

        if (!this.lastTime) this.lastTime = timestamp;
        const delta = timestamp - this.lastTime;
        this.lastTime = timestamp;

        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

        if (this.direction === 'down') {
            const pxPerMs = this.speedMap[this.speed] || 0.21;
            window.scrollBy(0, pxPerMs * delta);
            if (window.scrollY >= maxScroll - 2) {
                this.direction = 'up-fast';
            }
        } else {
            window.scrollBy(0, -(this.fastReturnSpeed * delta));
            if (window.scrollY <= 2) {
                window.scrollTo(0, 0);
                this.direction = 'down';
            }
        }

        this.rafId = requestAnimationFrame(ts => self._tick(ts));
    },
};

/* ================================================================
   INCIDENT TRACKER
   ================================================================ */

const IncidentTracker = {
    startTime: null,
    endTime: null,
    timerId: null,

    init() {
        const self = this;

        const btn = document.getElementById('btnIncident');
        if (btn) btn.addEventListener('click', () => self.toggle());

        const form = document.getElementById('incidentForm');
        if (form) form.addEventListener('submit', e => { e.preventDefault();
            self.save(); });

        const cancelBtn = document.getElementById('incidentCancelBtn');
        if (cancelBtn) cancelBtn.addEventListener('click', () => self.cancel());

        const closeBtn = document.getElementById('incidentModalClose');
        if (closeBtn) closeBtn.addEventListener('click', () => self.cancel());

        const overlay = document.getElementById('incidentModalOverlay');
        if (overlay) {
            overlay.addEventListener('click', e => {
                if (e.target === overlay) self.cancel();
            });
        }
    },

    toggle() {
        if (this.startTime) {
            this.stop();
        } else {
            this.start();
        }
    },

    start() {
        this.startTime = new Date();
        this.endTime = null;

        const btn = document.getElementById('btnIncident');
        const label = document.getElementById('incidentBtnLabel');
        const timerEl = document.getElementById('incidentTimer');

        if (btn) btn.classList.add('is-recording');
        if (label) label.textContent = t('incidentBtnStop');
        if (timerEl) timerEl.style.display = '';

        this._tick();
        const self = this;
        this.timerId = setInterval(() => self._tick(), 1000);
    },

    _tick() {
        const timerEl = document.getElementById('incidentTimer');
        if (!timerEl || !this.startTime) return;
        const diffSec = Math.floor((Date.now() - this.startTime.getTime()) / 1000);
        const h = Math.floor(diffSec / 3600);
        const m = Math.floor((diffSec % 3600) / 60);
        const s = diffSec % 60;
        timerEl.textContent = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    },

    stop() {
        if (!this.startTime) return;
        this.endTime = new Date();
        clearInterval(this.timerId);
        this.timerId = null;
        this._openModal();
    },

    cancel() {
        clearInterval(this.timerId);
        this.timerId = null;
        this.startTime = null;
        this.endTime = null;

        this._resetButton();
        this._closeModal();

        const form = document.getElementById('incidentForm');
        if (form) form.reset();
        const errEl = document.getElementById('incidentFormError');
        if (errEl) errEl.textContent = '';
    },

    _resetButton() {
        const btn = document.getElementById('btnIncident');
        const label = document.getElementById('incidentBtnLabel');
        const timerEl = document.getElementById('incidentTimer');

        if (btn) btn.classList.remove('is-recording');
        if (label) label.textContent = t('incidentBtnStart');
        if (timerEl) {
            timerEl.style.display = 'none';
            timerEl.textContent = '00:00:00';
        }
    },

    _openModal() {
        this._populateProductOptions();

        const startDisp = document.getElementById('incidentStartDisplay');
        const endDisp = document.getElementById('incidentEndDisplay');
        const durDisp = document.getElementById('incidentDurationDisplay');

        if (startDisp) startDisp.textContent = this._formatDateTime(this.startTime);
        if (endDisp) endDisp.textContent = this._formatDateTime(this.endTime);
        if (durDisp) durDisp.textContent = this._formatDuration(this.startTime, this.endTime);

        const overlay = document.getElementById('incidentModalOverlay');
        if (overlay) overlay.classList.add('is-open');
    },

    _closeModal() {
        const overlay = document.getElementById('incidentModalOverlay');
        if (overlay) overlay.classList.remove('is-open');
    },

    _formatDateTime(d) {
        if (!d) return '-';
        const pad = n => String(n).padStart(2, '0');
        return pad(d.getMonth() + 1) + '/' + pad(d.getDate()) + '/' + d.getFullYear() + ' ' +
            pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    },

    _formatDuration(start, end) {
        if (!start || !end) return '-';
        const totalSec = Math.max(0, Math.round((end.getTime() - start.getTime()) / 1000));
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    },

    _populateProductOptions() {
        const select = document.getElementById('incidentProduct');
        if (!select) return;
        const current = select.value;
        const products = Utils.Array.distinct(appState.tickets.map(r => r.product)).filter(Boolean).sort();

        select.innerHTML = '<option value="">' + t('incidentSelectProduct') + '</option>' +
            products.map(p => {
                return '<option value="' + Utils.String.escapeHtml(p) + '">' + Utils.String.escapeHtml(p) + '</option>';
            }).join('');

        if (products.indexOf(current) !== -1) select.value = current;
    },

    save() {
        const productSel = document.getElementById('incidentProduct');
        const problemEl = document.getElementById('incidentProblem');
        const rootCauseEl = document.getElementById('incidentRootCause');
        const errEl = document.getElementById('incidentFormError');
        const saveBtn = document.getElementById('incidentSaveBtn');

        const product = productSel ? productSel.value.trim() : '';
        const problem = problemEl ? problemEl.value.trim() : '';
        const rootCause = rootCauseEl ? rootCauseEl.value.trim() : '';

        if (!product || !problem || !rootCause) {
            if (errEl) errEl.textContent = t('incidentFormRequired');
            return;
        }
        if (errEl) errEl.textContent = '';

        const payload = {
            startTime: this.startTime.toISOString(),
            endTime: this.endTime.toISOString(),
            product,
            problem,
            rootCause,
        };

        const self = this;
        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.textContent = t('incidentSaving');
        }

        fetch(CONFIG.API.incidentSave, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
        })
            .then(res => res.json())
            .then(json => {
                if (!json || json.success === false) {
                    throw new Error((json && json.message) || 'Save failed');
                }
                self.startTime = null;
                self.endTime = null;
                self._resetButton();
                self._closeModal();
                const form = document.getElementById('incidentForm');
                if (form) form.reset();
            })
            .catch(err => {
                console.error('Failed to save incident:', err);
                if (errEl) errEl.textContent = t('incidentSaveFailed');
            })
            .finally(() => {
                if (saveBtn) {
                    saveBtn.disabled = false;
                    saveBtn.textContent = t('incidentSaveBtn');
                }
            });
    },
};

/* ================================================================
   BOOT
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {
    Auth.init();
    EventHandlers.applyStaticTranslations();
    AutoScroll.init();
    IncidentTracker.init();

    if (Auth.isAuthenticated()) {
        Auth.hideLoginScreen();
        App.init();
    } else {
        Auth.showLoginScreen();
    }
});