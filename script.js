/* ================================================================
   CONFIGURATION
   ================================================================ */

const CONFIG = {
    APP: {
        name: 'Helpdesk Monitor',
        version: '2.0.0',
        defaultLanguage: 'en',
        defaultTheme: 'light',
        refreshInterval: 600000,
    },
    CHART: {
        colors: {
            Critical: '#f43f5e',
            High: '#fb923c',
            Medium: '#f59e0b',
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
        tickets: 'https://script.google.com/macros/s/AKfycbwOiyJoD3rFgzo78MQxj6cNod6vyB5lwAEx0HVjSKr3NNGAMBJ5pE1d31ECE0tYEJrExg/exec?action=tickets',
        tasks: 'https://script.google.com/macros/s/AKfycbwOiyJoD3rFgzo78MQxj6cNod6vyB5lwAEx0HVjSKr3NNGAMBJ5pE1d31ECE0tYEJrExg/exec?action=tasks',
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
        appTitle: 'Helpdesk Monitor',
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
        trendSub: 'Volume harian — Issue vs Non-Issue',
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
        mtmARTSub: 'Rata-rata waktu merespon per bulan',
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
    },
    en: {
        appTitle: 'Helpdesk Monitor',
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
        trendSub: 'Daily volume — Issue vs Non-Issue',
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
        mtmARTSub: 'Average response time per month',
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
    },
};

/* ================================================================
   APPLICATION STATE
   ================================================================ */

const appState = {
    tickets: [],
    tasks: [],
    filteredTickets: [],
    filteredTasks: [],
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
    },
    charts: {},
    meta: {
        dataSource: 'live',
        lastSync: null,
        isSyncing: false,
    },
};

/* ================================================================
   UTILITY FUNCTIONS
   ================================================================ */

const Utils = {

    Date: {
        parseDate: function(str) {
            if (!str) return null;
            var parts = str.split('/').map(Number);
            return new Date(parts[2], parts[1] - 1, parts[0]);
        },

        parseDateInput: function(str) {
            if (!str) return null;
            var parts = str.split('-').map(Number);
            return new Date(parts[0], parts[1] - 1, parts[2]);
        },

        toJakartaParts: function(isoStr) {
            if (!isoStr) return null;
            var d = new Date(isoStr);
            if (isNaN(d.getTime())) return null;
            var fmt = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Jakarta',
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
            });
            var parts = fmt.formatToParts(d).reduce(function(acc, p) {
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

        isoToDDMMYYYY: function(isoStr) {
            var p = Utils.Date.toJakartaParts(isoStr);
            if (!p) return '';
            return String(p.day).padStart(2, '0') + '/' + String(p.month).padStart(2, '0') + '/' + p.year;
        },

        isoToTaskDateString: function(isoStr) {
            var p = Utils.Date.toJakartaParts(isoStr);
            if (!p) return '';
            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var dd = String(p.day).padStart(2, '0');
            var hh = String(p.hour).padStart(2, '0');
            var mi = String(p.minute).padStart(2, '0');
            var ss = String(p.second).padStart(2, '0');
            return dd + '-' + monthNames[p.month - 1] + '-' + p.year + ' ' + hh + ':' + mi + ':' + ss;
        },

        parseTaskDate: function(str) {
            if (!str) return null;
            var parts = str.split(' ');
            var datePart = parts[0] || '';
            var timePart = parts[1] || '0:0:0';
            var dParts = datePart.split('-');
            var tParts = timePart.split(':').map(Number);
            var monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return new Date(Number(dParts[2]), monthMap[dParts[1]], Number(dParts[0]), tParts[0] || 0, tParts[1] || 0, tParts[2] || 0);
        },

        taskDateOnly: function(str) {
            var dt = Utils.Date.parseTaskDate(str);
            return dt ? new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()) : null;
        },

        formatTime: function(date) {
            if (!date) return '';
            var h = String(date.getHours()).padStart(2, '0');
            var m = String(date.getMinutes()).padStart(2, '0');
            return h + ':' + m;
        },

        formatTaskDate: function(str) {
            if (!str) return '';
            var parts = str.split(' ');
            var datePart = parts[0] || '';
            if (!datePart) return '';
            var dParts = datePart.split('-');
            var monthMap = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '04', Jun: '05',
                Jul: '06', Aug: '07', Sep: '08', Oct: '09', Nov: '10', Dec: '11' };
            var monthNum = monthMap[dParts[1]] || dParts[1];
            var day = String(Number(dParts[0])).padStart(2, '0');
            return day + '/' + monthNum + '/' + dParts[2];
        },
    },

    String: {
        truncate: function(str, maxLen) {
            if (!str || str.length <= maxLen) return str || '';
            return str.slice(0, maxLen) + '…';
        },

        getInitials: function(name) {
            if (!name) return '?';
            return name.split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map(function(w) { return w[0]; })
                .join('')
                .toUpperCase();
        },

        capitalize: function(str) {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        },

        escapeHtml: function(str) {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        },

        formatTier: function(tier) {
            if (!tier) return '';
            return tier.replace(/^Tier(\d+)$/, 'Tier $1');
        },

        sanitizePlaceholderDate: function(str) {
            if (!str) return '';
            return /1899|1900/.test(str) ? '' : str;
        },
    },

    Math: {
        sum: function(arr) { return arr.reduce(function(a, b) { return a + b; }, 0); },
        average: function(arr) { return arr.length ? Utils.Math.sum(arr) / arr.length : 0; },
        percentage: function(part, total) { return total > 0 ? (part / total) * 100 : 0; },
        clamp: function(val, min, max) { return Math.min(Math.max(val, min), max); },
        round: function(val, decimals) { return Number(val.toFixed(decimals)); },
    },

    Array: {
        distinct: function(arr) { return [...new Set(arr)]; },
        groupBy: function(arr, key) {
            return arr.reduce(function(acc, item) {
                var k = item[key] || 'unknown';
                if (!acc[k]) acc[k] = [];
                acc[k].push(item);
                return acc;
            }, {});
        },
        sortBy: function(arr, key, asc) {
            asc = asc !== undefined ? asc : true;
            return [...arr].sort(function(a, b) {
                var va = a[key] || '';
                var vb = b[key] || '';
                return asc ? va.localeCompare(vb) : vb.localeCompare(va);
            });
        },
        paginate: function(arr, page, size) {
            var start = (page - 1) * size;
            return arr.slice(start, start + size);
        },
        totalPages: function(arr, size) { return Math.max(1, Math.ceil(arr.length / size)); },
    },

    Duration: {
        parse: function(str) {
            if (!str) return 0;
            var isIso = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
            if (isIso) {
                var p = Utils.Date.toJakartaParts(str);
                if (!p) return 0;
                return p.hour * 60 + p.minute + (p.second || 0) / 60;
            }
            var parts = str.split(':').map(Number);
            if (parts.some(isNaN)) return 0;
            return parts[0] * 60 + parts[1] + (parts[2] || 0) / 60;
        },

        parseTimeToSeconds: function(str) {
            if (!str) return null;
            var isIso = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
            if (isIso) {
                var p = Utils.Date.toJakartaParts(str);
                if (!p) return null;
                return p.hour * 3600 + p.minute * 60 + (p.second || 0);
            }
            var parts = str.split(':').map(Number);
            if (parts.length < 2 || parts.some(isNaN)) return null;
            return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
        },

        format: function(minutes) {
            if (minutes < 60) return minutes.toFixed(1) + 'm';
            return (minutes / 60).toFixed(1) + 'h';
        },

        formatHMS: function(totalMinutes) {
            var totalSeconds = Math.round((totalMinutes || 0) * 60);
            var h = Math.floor(totalSeconds / 3600);
            var m = Math.floor((totalSeconds % 3600) / 60);
            var s = totalSeconds % 60;
            return h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        },

        formatAHT: function(totalMinutes) {
            var totalSeconds = Math.max(0, Math.round((totalMinutes || 0) * 60));
            var h = Math.floor(totalSeconds / 3600);
            var m = Math.floor((totalSeconds % 3600) / 60);
            var s = totalSeconds % 60;
            var hh = String(h).padStart(2, '0');
            var mm = String(m).padStart(2, '0');
            var ss = String(s).padStart(2, '0');
            return hh + '.' + mm + '.' + ss;
        },

        sum: function(items, key) {
            return items.reduce(function(acc, item) { return acc + Utils.Duration.parse(item[key] || ''); }, 0);
        },
    },

    Color: {
        toRGBA: function(hex, alpha) {
            var r = parseInt(hex.slice(1, 3), 16);
            var g = parseInt(hex.slice(3, 5), 16);
            var b = parseInt(hex.slice(5, 7), 16);
            return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
        },
    },

    DOM: {
        get: function(id) { return document.getElementById(id); },
        qs: function(sel, ctx) { return (ctx || document).querySelector(sel); },
        qsa: function(sel, ctx) { return (ctx || document).querySelectorAll(sel); },
        create: function(tag, cls, html) {
            var el = document.createElement(tag);
            if (cls) el.className = cls;
            if (html) el.innerHTML = html;
            return el;
        },
    },

    debounce: function(fn, delay) {
        var timer = null;
        return function() {
            var args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function() { fn.apply(null, args); }, delay);
        };
    },

    uid: function() { return Date.now().toString(36) + Math.random().toString(36).slice(2); },
};

/* ================================================================
   TRANSLATION
   ================================================================ */

function t(key, params) {
    var lang = appState.ui.language;
    var translations = LOCALE[lang] || LOCALE.id;
    var text = translations[key] || key;

    if (params) {
        Object.keys(params).forEach(function(k) {
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
    var newTheme = getTheme() === 'dark' ? 'light' : 'dark';
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

var DataLoader = {

    fetchJSON: function(url) {
        var bust = (url.indexOf('?') !== -1 ? '&' : '?') + '_t=' + Date.now();
        return fetch(url + bust, { cache: 'no-store' })
            .then(function(response) {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then(function(json) {
                if (!json || json.success === false || !Array.isArray(json.data)) {
                    throw new Error('Invalid API response shape');
                }
                return json.data;
            });
    },

    getField: function(obj, names) {
        var namesArr = Array.prototype.slice.call(arguments, 1);
        var normalize = function(s) { return s.toLowerCase().replace(/[^a-z0-9]/g, ''); };
        for (var i = 0; i < namesArr.length; i++) {
            var n = namesArr[i];
            if (obj[n] !== undefined && obj[n] !== null && obj[n] !== '') {
                return String(obj[n]).trim();
            }
        }
        var keys = Object.keys(obj);
        for (var j = 0; j < namesArr.length; j++) {
            var target = normalize(namesArr[j]);
            var found = null;
            for (var k = 0; k < keys.length; k++) {
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

    mapTicketRows: function(records) {
        var out = [];
        (records || []).forEach(function(rec) {
            var rawDate = DataLoader.getField(rec, 'Ticket Date', 'Date');
            if (!rawDate) return;

            out.push({
                date: Utils.Date.isoToDDMMYYYY(rawDate),
                day: DataLoader.getField(rec, 'Day'),
                month: DataLoader.getField(rec, 'Month'),
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
            });
        });
        return out;
    },

    mapTaskRows: function(records) {
        var out = [];
        (records || []).forEach(function(rec) {
            var staff = DataLoader.getField(rec, 'Staff Member', 'Staff');
            var task = DataLoader.getField(rec, 'Task');
            if (!staff && !task) return;

            var rawStart = DataLoader.getField(rec, 'Start Time');

            out.push({
                staff: staff,
                task: task,
                month: DataLoader.getField(rec, 'Month'),
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

    normalizeYesNo: function(value) {
        var s = (value || '').trim().toLowerCase().replace(/\s+/g, '');
        if (['yes', 'y', 'onsla', 'true', '1', 'escalated'].indexOf(s) !== -1) return 'Yes';
        if (['no', 'n', 'offsla', 'false', '0'].indexOf(s) !== -1) return 'No';
        return value || '';
    },

    load: function() {
        if (window.location.protocol === 'file:') {
            console.warn('File protocol detected, cannot fetch data');
            appState.tickets = [];
            appState.tasks = [];
            appState.meta.dataSource = 'error';
            appState.meta.lastSync = new Date();
            return Promise.resolve(false);
        }

        return Promise.all([
            DataLoader.fetchJSON(CONFIG.API.tickets),
            DataLoader.fetchJSON(CONFIG.API.tasks),
        ]).then(function(results) {
            var ticketRecords = results[0];
            var taskRecords = results[1];
            var mappedTickets = DataLoader.mapTicketRows(ticketRecords);
            var mappedTasks = DataLoader.mapTaskRows(taskRecords);

            if (mappedTickets.length === 0 && mappedTasks.length === 0) {
                throw new Error('Empty dataset from API');
            }

            appState.tickets = mappedTickets;
            appState.tasks = mappedTasks;
            appState.meta.dataSource = 'live';
            appState.meta.lastSync = new Date();
            return true;
        }).catch(function(err) {
            console.error('Failed to load data from API:', err);
            appState.tickets = [];
            appState.tasks = [];
            appState.meta.dataSource = 'error';
            appState.meta.lastSync = new Date();
            return false;
        });
    }
};

/* ================================================================
   DATA PROCESSOR
   ================================================================ */

var DataProcessor = {

    calculateKPIs: function(data) {
        var total = data.length;
        var closed = data.filter(function(r) { return r.status === 'Closed'; }).length;
        var issue = data.filter(function(r) { return r.type === 'Issue'; }).length;
        var nonIssue = data.filter(function(r) { return r.type === 'Non Issue'; }).length;
        var activeEsc = data.filter(function(r) { return r.esc === 'Yes' && r.status !== 'Closed'; }).length;
        var onSLA = data.filter(function(r) { return r.onSLA === 'Yes'; }).length;
        var slaRate = total > 0 ? (onSLA / total) * 100 : 0;

        var htEntries = data.filter(function(r) { return r.ht && Utils.Duration.parse(r.ht) >= 0; });
        var totalMinutes = htEntries.reduce(function(acc, r) { return acc + Utils.Duration.parse(r.ht); }, 0);
        var aht = htEntries.length > 0 ? totalMinutes / htEntries.length : 0;

        return { total: total, closed: closed, issue: issue, nonIssue: nonIssue, activeEsc: activeEsc, slaRate: slaRate, aht: aht };
    },

    calculateEscalationStats: function(data) {
        var esc = data.filter(function(r) { return r.esc === 'Yes'; });
        var total = esc.length;
        var active = esc.filter(function(r) { return r.status !== 'Closed'; }).length;
        var closed = esc.filter(function(r) { return r.status === 'Closed'; }).length;
        var rate = data.length > 0 ? (total / data.length) * 100 : 0;

        var products = Utils.Array.distinct(data.map(function(r) { return r.product; })).sort();
        var byProduct = products.map(function(p) {
            return {
                name: p,
                label: p.replace('Sociomile ', 'SM '),
                total: esc.filter(function(r) { return r.product === p; }).length,
                active: esc.filter(function(r) { return r.product === p && r.status !== 'Closed'; }).length,
            };
        }).filter(function(x) { return x.total > 0; });

        var tierSet = Utils.Array.distinct(data.map(function(r) { return r.tier; }).filter(Boolean)).sort();
        var palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        var byTier = tierSet.map(function(t, i) {
            return {
                name: t,
                label: t,
                total: esc.filter(function(r) { return r.tier === t; }).length,
                active: esc.filter(function(r) { return r.tier === t && r.status !== 'Closed'; }).length,
                color: CONFIG.CHART.colors[t] || palette[i % palette.length],
            };
        }).filter(function(x) { return x.total > 0; });

        var byType = [
            { name: t('issue'), key: 'Issue', total: esc.filter(function(r) { return r.type === 'Issue'; }).length, active: esc.filter(function(r) { return r.type === 'Issue' && r.status !== 'Closed'; }).length, color: CONFIG.CHART.colors.issue },
            { name: t('nonIssue'), key: 'Non Issue', total: esc.filter(function(r) { return r.type === 'Non Issue'; }).length, active: esc.filter(function(r) { return r.type === 'Non Issue' && r.status !== 'Closed'; }).length, color: CONFIG.CHART.colors.non },
        ].filter(function(x) { return x.total > 0; });

        var activeRows = active > 0 ? esc
            .filter(function(r) { return r.status !== 'Closed'; })
            .map(function(r) {
                var priColor = CONFIG.CHART.colors[r.priority] || CONFIG.CHART.colors.Low;
                var prodColor = CONFIG.CHART.colors[r.product] || CONFIG.CHART.colors.Tier1;
                var prodShort = r.product.replace('Sociomile ', 'SM ');
                var clientFull = r.client || '-';
                var clientMatch = clientFull.match(/^([^(]+)/);
                var clientShort = clientMatch ? clientMatch[1].trim() : clientFull;
                var compMatch = clientFull.match(/\(([^)]+)\)/);
                var company = compMatch ? compMatch[1] : '';

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

        return { total: total, active: active, closed: closed, rate: rate, byProduct: byProduct, byTier: byTier, byType: byType, activeRows: activeRows };
    },

    calculateTaskMetrics: function(data) {
        var total = data.length;
        var done = data.filter(function(t) { return t.status === 'Done'; }).length;
        var progress = data.filter(function(t) { return t.status === 'Progress'; }).length;
        var totalMinutes = data.reduce(function(acc, t) { return acc + Utils.Duration.parse(t.duration); }, 0);
        var staffCount = new Set(data.map(function(t) { return t.staff; })).size;
        return { total: total, done: done, progress: progress, totalMinutes: totalMinutes, staffCount: staffCount };
    },

    getPreviousPeriodData: function(data, filters) {
        var month = filters.month, week = filters.week, dateFrom = filters.dateFrom, dateTo = filters.dateTo;
        var product = filters.product, tier = filters.tier, shift = filters.shift, staff = filters.staff;

        var applyDim = function(rows) {
            return rows.filter(function(r) {
                return (product === 'all' || r.product === product) &&
                    (tier === 'all' || r.tier === tier) &&
                    (shift === 'all' || r.shift === shift) &&
                    (staff === 'all' || r.staff === staff);
            });
        };

        if (dateFrom || dateTo) {
            var parseLocal = function(s) {
                var parts = s.split('-').map(Number);
                return new Date(parts[0], parts[1] - 1, parts[2]);
            };
            var from = dateFrom ? parseLocal(dateFrom) : null;
            var to = dateTo ? parseLocal(dateTo) : null;
            if (to) to.setHours(23, 59, 59, 999);

            if (!from || !to) {
                var dates = Utils.Array.distinct(data.map(function(r) { return r.date; }))
                    .map(Utils.Date.parseDate).filter(Boolean).sort(function(a, b) { return a - b; });
                if (dates.length === 0) return [];
                if (!from) from = dates[0];
                if (!to) { to = new Date(dates[dates.length - 1]);
                    to.setHours(23, 59, 59, 999); }
            }

            var duration = to.getTime() - from.getTime() + 1;
            var prevTo = new Date(from.getTime() - 1);
            var prevFrom = new Date(from.getTime() - duration);

            return applyDim(data.filter(function(r) {
                var rd = Utils.Date.parseDate(r.date);
                return rd && rd >= prevFrom && rd <= prevTo;
            }));
        }

        if (week !== 'all') {
            var weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
            var idx = weeks.indexOf(week);
            var prevWeek = idx > 0 ? weeks[idx - 1] : null;
            if (!prevWeek) return [];
            return applyDim(data.filter(function(r) { return r.week === prevWeek && (month === 'all' || r.month === month); }));
        }

        var allDates = Utils.Array.distinct(data.map(function(r) { return r.date; }))
            .sort(function(a, b) { return Utils.Date.parseDate(a) - Utils.Date.parseDate(b); });
        if (allDates.length < 2) return [];
        var half = Math.ceil(allDates.length / 2);
        var prevSet = new Set(allDates.slice(0, half));
        return applyDim(data.filter(function(r) { return prevSet.has(r.date); }));
    },

    preparePriorityData: function(data) {
        var labels = CONFIG.PRIORITIES;
        var values = labels.map(function(p) { return data.filter(function(r) { return r.priority === p; }).length; });
        var colors = labels.map(function(p) { return CONFIG.CHART.colors[p]; });
        return { labels: labels, values: values, colors: colors };
    },

    prepareTierData: function(data) {
        var tiers = Utils.Array.distinct(data.map(function(r) { return r.tier; }).filter(Boolean)).sort();
        if (tiers.length === 0) {
            return { labels: [], rawTiers: [], issue: [], nonIssue: [], totals: [] };
        }

        var labels = tiers.map(function(t) { return Utils.String.formatTier(t); });
        var issue = tiers.map(function(t) { return data.filter(function(r) { return r.tier === t && r.type === 'Issue'; }).length; });
        var nonIssue = tiers.map(function(t) { return data.filter(function(r) { return r.tier === t && r.type === 'Non Issue'; }).length; });
        var totals = tiers.map(function(t) { return data.filter(function(r) { return r.tier === t; }).length; });

        return { labels: labels, rawTiers: tiers, issue: issue, nonIssue: nonIssue, totals: totals };
    },

    prepareProductData: function(data) {
        var products = Utils.Array.distinct(data.map(function(r) { return r.product; })).sort();
        var labels = products.map(function(p) { return p.replace('Sociomile ', 'SM '); });
        var issue = products.map(function(p) { return data.filter(function(r) { return r.product === p && r.type === 'Issue'; }).length; });
        var nonIssue = products.map(function(p) { return data.filter(function(r) { return r.product === p && r.type === 'Non Issue'; }).length; });
        return { labels: labels, issue: issue, nonIssue: nonIssue };
    },

    prepareFeatureData: function(data) {
        var features = Utils.Array.distinct(data.map(function(r) { return r.feature || 'Lainnya'; }));
        var labels = features;
        var issue = features.map(function(f) { return data.filter(function(r) { return (r.feature || 'Lainnya') === f && r.type === 'Issue'; }).length; });
        var nonIssue = features.map(function(f) { return data.filter(function(r) { return (r.feature || 'Lainnya') === f && r.type === 'Non Issue'; }).length; });
        return { labels: labels, issue: issue, nonIssue: nonIssue };
    },

    prepareStaffData: function(data) {
        var unassignedLabel = t('unassigned');
        var staffs = Utils.Array.distinct(data.map(function(r) { return r.staff || unassignedLabel; })).sort();
        var counts = staffs.map(function(s) { return data.filter(function(r) { return (r.staff || unassignedLabel) === s; }).length; });
        var combined = staffs.map(function(s, i) { return { label: s, count: counts[i] }; })
            .filter(function(x) { return x.count > 0; })
            .sort(function(a, b) { return b.count - a.count; });
        return {
            labels: combined.map(function(x) { return x.label.split(' ').slice(0, 2).join(' '); }),
            values: combined.map(function(x) { return x.count; }),
        };
    },

    prepareTrendData: function(data) {
        var allDates = Utils.Array.distinct(data.map(function(r) { return r.date; }))
            .sort(function(a, b) { return Utils.Date.parseDate(a) - Utils.Date.parseDate(b); });
        var last7 = allDates.slice(-7);
        var days = t('days');
        var labels = last7.map(function(dt) {
            var parts = dt.split('/').map(Number);
            var dayName = days[new Date(parts[2], parts[1] - 1, parts[0]).getDay()];
            return dayName + ' ' + String(parts[0]).padStart(2, '0') + '/' + String(parts[1]).padStart(2, '0');
        });
        var issue = last7.map(function(dt) { return data.filter(function(r) { return r.date === dt && r.type === 'Issue'; }).length; });
        var nonIssue = last7.map(function(dt) { return data.filter(function(r) { return r.date === dt && r.type === 'Non Issue'; }).length; });
        return { labels: labels, issue: issue, nonIssue: nonIssue };
    },

    prepareShiftData: function(data) {
        var shifts = ['Pagi', 'Siang', 'Malam'];
        var labels = [t('morning'), t('day'), t('night')];
        var issue = shifts.map(function(s) { return data.filter(function(r) { return r.shift === s && r.type === 'Issue'; }).length; });
        var nonIssue = shifts.map(function(s) { return data.filter(function(r) { return r.shift === s && r.type === 'Non Issue'; }).length; });
        var totals = shifts.map(function(s) { return data.filter(function(r) { return r.shift === s; }).length; });
        return { labels: labels, issue: issue, nonIssue: nonIssue, totals: totals };
    },

    getStaffList: function(data) {
        return Utils.Array.distinct(data.map(function(r) { return r.staff; }).filter(Boolean)).sort();
    },

    prepareMonthlyComparison: function(tickets, monthFrom, monthTo) {
        if (!monthFrom || !monthTo) return null;

        var sorted = Utils.Array.distinct(tickets.map(function(r) { return r.month; }))
            .filter(Boolean)
            .sort(function(a, b) {
                var la = a.replace(/\[\d+\]\s*/, '').trim().toLowerCase();
                var lb = b.replace(/\[\d+\]\s*/, '').trim().toLowerCase();
                var na = UIRenderer._MONTH_ORDER[la] !== undefined ? UIRenderer._MONTH_ORDER[la] : 999;
                var nb = UIRenderer._MONTH_ORDER[lb] !== undefined ? UIRenderer._MONTH_ORDER[lb] : 999;
                if (na !== nb) return na - nb;
                return la.localeCompare(lb);
            });

        var fromIdx = sorted.indexOf(monthFrom);
        var toIdx = sorted.indexOf(monthTo);
        if (fromIdx === -1 || toIdx === -1) return null;
        if (fromIdx > toIdx) {
            var tmp = fromIdx;
            fromIdx = toIdx;
            toIdx = tmp;
        }

        var selectedMonths = sorted.slice(fromIdx, toIdx + 1);
        if (selectedMonths.length === 0) return null;

        var inRange = tickets.filter(function(r) { return selectedMonths.indexOf(r.month) !== -1; });

        var buckets = selectedMonths.map(function(m) {
            var rows = tickets.filter(function(r) { return r.month === m; });
            return {
                key: m,
                label: m.replace(/\[\d+\]\s*/, '').trim(),
                rows: rows,
                kpi: DataProcessor.calculateKPIs(rows),
                priority: DataProcessor.preparePriorityData(rows),
            };
        });

        return { buckets: buckets, totalRecords: inRange.length, allRows: inRange };
    },

    prepareMonthlyTierComparison: function(buckets) {
        var allRows = buckets.reduce(function(acc, b) { return acc.concat(b.rows); }, []);
        var tiers = Utils.Array.distinct(allRows.map(function(r) { return r.tier; }).filter(Boolean)).sort();
        var palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        var datasets = tiers.map(function(tier, i) {
            return {
                label: Utils.String.formatTier(tier),
                data: buckets.map(function(b) { return b.rows.filter(function(r) { return r.tier === tier; }).length; }),
                color: CONFIG.CHART.colors[tier] || palette[i % palette.length],
            };
        });
        return { labels: buckets.map(function(b) { return b.label; }), datasets: datasets };
    },

    prepareMonthlyProductComparison: function(buckets) {
        var allRows = buckets.reduce(function(acc, b) { return acc.concat(b.rows); }, []);
        var products = Utils.Array.distinct(allRows.map(function(r) { return r.product; })).sort();
        var palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
        var datasets = products.map(function(p, i) {
            return {
                label: p.replace('Sociomile ', 'SM '),
                data: buckets.map(function(b) { return b.rows.filter(function(r) { return r.product === p; }).length; }),
                color: CONFIG.CHART.colors[p] || palette[i % palette.length],
            };
        });
        return { labels: buckets.map(function(b) { return b.label; }), datasets: datasets };
    },

    prepareMonthlyStaffComparison: function(buckets) {
        var unassignedLabel = t('unassigned');
        var allRows = buckets.reduce(function(acc, b) { return acc.concat(b.rows); }, []);
        var staffs = Utils.Array.distinct(allRows.map(function(r) { return r.staff || unassignedLabel; })).sort();
        var palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
        var datasets = staffs.map(function(s, i) {
            return {
                label: s.split(' ').slice(0, 2).join(' '),
                data: buckets.map(function(b) { return b.rows.filter(function(r) { return (r.staff || unassignedLabel) === s; }).length; }),
                color: palette[i % palette.length],
            };
        });
        return { labels: buckets.map(function(b) { return b.label; }), datasets: datasets };
    },

    prepareMonthlyFeatureComparison: function(buckets) {
        var allRows = buckets.reduce(function(acc, b) { return acc.concat(b.rows); }, []);
        var features = Utils.Array.distinct(allRows.map(function(r) { return r.feature || 'Lainnya'; }));
        var palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
        var datasets = features.map(function(f, i) {
            return {
                label: f,
                data: buckets.map(function(b) { return b.rows.filter(function(r) { return (r.feature || 'Lainnya') === f; }).length; }),
                color: palette[i % palette.length],
            };
        });
        return { labels: buckets.map(function(b) { return b.label; }), datasets: datasets };
    },

    prepareMonthlyShiftComparison: function(buckets) {
        var shifts = ['Pagi', 'Siang', 'Malam'];
        var shiftLabelMap = { Pagi: t('morning'), Siang: t('day'), Malam: t('night') };
        var datasets = shifts.map(function(s) {
            return {
                label: shiftLabelMap[s],
                data: buckets.map(function(b) { return b.rows.filter(function(r) { return r.shift === s; }).length; }),
                color: CONFIG.CHART.colors[s],
            };
        });
        return { labels: buckets.map(function(b) { return b.label; }), datasets: datasets };
    },

    calculateAverageResponseTime: function(data) {
        var totalSeconds = 0;
        var count = 0;

        data.forEach(function(r) {
            var start = Utils.Duration.parseTimeToSeconds(r.startTime);
            var solved = Utils.Duration.parseTimeToSeconds(r.solvedTime);
            if (start === null || solved === null) return;

            var diff = solved - start;
            if (diff < 0) diff += 24 * 3600;
            totalSeconds += diff;
            count++;
        });

        var avgSeconds = count > 0 ? totalSeconds / count : 0;
        var minutes = Math.floor(avgSeconds / 60);
        var seconds = Math.round(avgSeconds % 60);

        return {
            avgSeconds: avgSeconds,
            formatted: minutes > 0 ? minutes + 'm ' + seconds + 's' : seconds + 's',
            count: count,
            totalSeconds: totalSeconds
        };
    },
};

/* ================================================================
   FILTER ENGINE
   ================================================================ */

var FilterEngine = {

    applyTicketFilters: function(data, filters) {
        var month = filters.month, week = filters.week, dateFrom = filters.dateFrom, dateTo = filters.dateTo;
        var product = filters.product, tier = filters.tier, shift = filters.shift, staff = filters.staff;

        return data.filter(function(r) {
            if (month !== 'all' && r.month !== month) return false;
            if (week !== 'all' && r.week !== week) return false;

            if (dateFrom || dateTo) {
                var rd = Utils.Date.parseDate(r.date);
                if (!rd) return false;
                if (dateFrom) {
                    var from = Utils.Date.parseDateInput(dateFrom);
                    if (from && rd < from) return false;
                }
                if (dateTo) {
                    var to = Utils.Date.parseDateInput(dateTo);
                    if (to) {
                        var toEnd = new Date(to);
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

    applyTaskFilters: function(data, filters) {
        var month = filters.month, week = filters.week, dateFrom = filters.dateFrom, dateTo = filters.dateTo;
        var taskStaff = filters.taskStaff;

        return data.filter(function(t) {
            if (month !== 'all' && t.month !== month) return false;
            if (week !== 'all' && t.week !== week) return false;
            if (taskStaff && taskStaff !== 'all' && t.staff !== taskStaff) return false;

            if (dateFrom || dateTo) {
                var td = Utils.Date.taskDateOnly(t.start);
                if (!td) return false;
                if (dateFrom) {
                    var from = Utils.Date.parseDateInput(dateFrom);
                    if (from && td < from) return false;
                }
                if (dateTo) {
                    var to = Utils.Date.parseDateInput(dateTo);
                    if (to) {
                        var toEnd = new Date(to);
                        toEnd.setHours(23, 59, 59, 999);
                        if (td > toEnd) return false;
                    }
                }
            }

            return true;
        });
    },

    getPreviousTaskData: function(data, filters) {
        var month = filters.month, week = filters.week, dateFrom = filters.dateFrom, dateTo = filters.dateTo;
        var taskStaff = filters.taskStaff;

        var applyDim = function(rows) {
            return rows.filter(function(t) {
                return (!taskStaff || taskStaff === 'all' || t.staff === taskStaff);
            });
        };

        if (dateFrom || dateTo) {
            var parseLocal = function(s) {
                var parts = s.split('-').map(Number);
                return new Date(parts[0], parts[1] - 1, parts[2]);
            };
            var from = dateFrom ? parseLocal(dateFrom) : null;
            var to = dateTo ? parseLocal(dateTo) : null;
            if (to) to.setHours(23, 59, 59, 999);

            if (!from || !to) {
                var dates = data.map(function(t) { return t.start; }).map(Utils.Date.taskDateOnly).filter(Boolean).sort(function(a, b) { return a - b; });
                if (dates.length === 0) return [];
                if (!from) from = dates[0];
                if (!to) { to = new Date(dates[dates.length - 1]);
                    to.setHours(23, 59, 59, 999); }
            }

            var duration = to.getTime() - from.getTime() + 1;
            var prevTo = new Date(from.getTime() - 1);
            var prevFrom = new Date(from.getTime() - duration);

            return applyDim(data.filter(function(t) {
                var td = Utils.Date.taskDateOnly(t.start);
                return td && td >= prevFrom && td <= prevTo;
            }));
        }

        if (week !== 'all') {
            var weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
            var idx = weeks.indexOf(week);
            var prevWeek = idx > 0 ? weeks[idx - 1] : null;
            if (!prevWeek) return [];
            return applyDim(data.filter(function(t) { return t.week === prevWeek && (month === 'all' || t.month === month); }));
        }

        var allDates = data.map(function(t) { return t.start; }).sort(function(a, b) { return Utils.Date.parseTaskDate(a) - Utils.Date.parseTaskDate(b); });
        if (allDates.length < 2) return [];
        var half = Math.ceil(allDates.length / 2);
        var prevSet = new Set(allDates.slice(0, half));
        return applyDim(data.filter(function(t) { return prevSet.has(t.start); }));
    },

    getFilterSummary: function(filters) {
        var parts = [];
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

var ChartEngine = {

    _charts: {},

    destroy: function(key) {
        if (this._charts[key]) {
            this._charts[key].destroy();
            delete this._charts[key];
        }
    },

    destroyAll: function() {
        var self = this;
        Object.keys(this._charts).forEach(function(key) { self.destroy(key); });
    },

    createDoughnut: function(canvasId, labels, data, colors, cutout) {
        cutout = cutout || CONFIG.CHART.cutout;
        this.destroy(canvasId);
        var ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            var chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: colors,
                        borderWidth: 2,
                        borderColor: getSurfaceColor(),
                        hoverOffset: 6,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: cutout,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    var total = data.reduce(function(a, b) { return a + b; }, 0);
                                    var pct = total > 0 ? Math.round((c.parsed / total) * 100) : 0;
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

    createStackedBar: function(canvasId, labels, datasets, isHorizontal) {
        isHorizontal = isHorizontal || false;
        this.destroy(canvasId);
        var ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            var datasetConfigs = datasets.map(function(ds) {
                return {
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: ds.color ? Utils.Color.toRGBA(ds.color, 0.85) : 'rgba(91,115,255,0.85)',
                    borderRadius: CONFIG.CHART.borderRadius,
                    borderSkipped: false,
                };
            });

            var chart = new Chart(ctx, {
                type: 'bar',
                data: { labels: labels, datasets: datasetConfigs },
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

    createSingleBar: function(canvasId, labels, data, colors) {
        this.destroy(canvasId);
        var ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            var palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#fb923c', '#f43f5e'];
            var bgColors = data.map(function(_, i) { return Utils.Color.toRGBA(palette[i % palette.length], 0.85); });

            var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: t('totalTickets'),
                        data: data,
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

    createLine: function(canvasId, labels, datasets) {
        this.destroy(canvasId);
        var ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        try {
            var datasetConfigs = datasets.map(function(ds) {
                return {
                    label: ds.label,
                    data: ds.data,
                    borderColor: ds.color,
                    backgroundColor: Utils.Color.toRGBA(ds.color, 0.08),
                    tension: CONFIG.CHART.tension,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    pointBackgroundColor: ds.color,
                    borderWidth: 2,
                };
            });

            var chart = new Chart(ctx, {
                type: 'line',
                data: { labels: labels, datasets: datasetConfigs },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { intersect: false, mode: 'index' },
                    plugins: {
                        legend: {
                            labels: { color: getTickColor(), boxWidth: 10, font: { size: 11, family: 'Inter' }, padding: 14 },
                        },
                        tooltip: {
                            callbacks: {
                                footer: function(items) {
                                    var total = items.reduce(function(a, i) { return a + i.parsed.y; }, 0);
                                    return 'Total: ' + total;
                                },
                            },
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
            afterDraw: function(chart) {
                if (chart.config.type !== 'doughnut') return;
                var ctx = chart.ctx;
                var chartArea = chart.chartArea;
                var cx = (chartArea.left + chartArea.right) / 2;
                var cy = (chartArea.top + chartArea.bottom) / 2;
                var data = chart.data.datasets[0].data;
                var total = data.reduce(function(a, b) { return a + b; }, 0);

                var meta = chart.getDatasetMeta(0);
                if (total > 0) {
                    meta.data.forEach(function(arc, i) {
                        var val = data[i];
                        if (!val) return;
                        var pct = Math.round((val / total) * 100);
                        if (pct < 4) return;
                        var angle = (arc.startAngle + arc.endAngle) / 2;
                        var r = (arc.outerRadius + arc.innerRadius) / 2;
                        var lx = cx + Math.cos(angle) * r;
                        var ly = cy + Math.sin(angle) * r;
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
            afterDatasetsDraw: function(chart) {
                var ctx = chart.ctx;
                var data = chart.data;
                var nds = data.datasets.length;

                for (var di = 0; di < nds; di++) {
                    var meta = chart.getDatasetMeta(di);
                    if (meta.hidden) continue;
                    meta.data.forEach(function(bar, i) {
                        var val = data.datasets[di].data[i];
                        if (!val) return;
                        var h = Math.abs(bar.base - bar.y);
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

                data.labels.forEach(function(_, i) {
                    var total = 0;
                    var topY = Infinity;
                    for (var dj = 0; dj < nds; dj++) {
                        var m = chart.getDatasetMeta(dj);
                        if (m.hidden) continue;
                        var b = m.data[i];
                        if (!b) continue;
                        total += (data.datasets[dj].data[i] || 0);
                        topY = Math.min(topY, b.y);
                    }
                    if (!total) return;
                    var lastBar = chart.getDatasetMeta(nds - 1).data[i];
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
            afterDatasetsDraw: function(chart) {
                var ctx = chart.ctx;
                var data = chart.data;
                var nds = data.datasets.length;

                for (var di = 0; di < nds; di++) {
                    var meta = chart.getDatasetMeta(di);
                    if (meta.hidden) continue;
                    meta.data.forEach(function(bar, i) {
                        var val = data.datasets[di].data[i];
                        if (!val) return;
                        var w = Math.abs(bar.x - bar.base);
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

                data.labels.forEach(function(_, i) {
                    var total = 0;
                    var rx = 0;
                    for (var dj = 0; dj < nds; dj++) {
                        var m = chart.getDatasetMeta(dj);
                        if (m.hidden) continue;
                        var b = m.data[i];
                        if (!b) continue;
                        total += (data.datasets[dj].data[i] || 0);
                        rx = Math.max(rx, b.x);
                    }
                    if (!total) return;
                    var bar = chart.getDatasetMeta(nds - 1).data[i];
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
            afterDatasetsDraw: function(chart) {
                var ctx = chart.ctx;
                var data = chart.data;
                var meta = chart.getDatasetMeta(0);
                meta.data.forEach(function(bar, i) {
                    var val = data.datasets[0].data[i];
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
            afterDatasetsDraw: function(chart) {
                var ctx = chart.ctx;
                chart.data.datasets.forEach(function(ds, di) {
                    var meta = chart.getDatasetMeta(di);
                    if (meta.hidden) return;
                    meta.data.forEach(function(pt, i) {
                        var val = ds.data[i];
                        if (val == null) return;
                        ctx.save();
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillStyle = ds.borderColor;
                        ctx.font = 'bold 10px Inter';
                        ctx.fillText(val, pt.x, pt.y - 6);
                        ctx.restore();
                    });
                });
            }
        },
    },

    update: function(canvasId, newData) {
        var chart = this._charts[canvasId];
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

var UIRenderer = {

    renderKPI: function(data, prevData, filterSummary, gridId, badgeId) {
        gridId = gridId || 'kpiGrid';
        badgeId = badgeId || 'kpiBadge';
        var grid = document.getElementById(gridId);
        if (!grid) return;

        var cur = DataProcessor.calculateKPIs(data);
        var prev = prevData ? DataProcessor.calculateKPIs(prevData) : null;
        var prevLabel = UIRenderer._getPrevLabel();
        var hasPrev = prev !== null;

        var ahtStr = function(v) { return Utils.Duration.formatAHT(v); };

        var kpis = [
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
                value: '-',
                color: '#06b6d4',
                sub: t('subART'),
                delta: null,
            },
            {
                id: 'sla',
                value: cur.slaRate.toFixed(1) + '%',
                color: '#10b981',
                sub: t('subSLA'),
                delta: hasPrev ? UIRenderer._deltaTag(cur.slaRate, prev.slaRate, false) : null,
            },
        ];

        var badgeEl = document.getElementById(badgeId);
        if (badgeEl) badgeEl.textContent = filterSummary;

        grid.innerHTML = kpis.map(function(k) {
            var deltaHtml = k.delta ? '<div style="margin-top:6px;display:flex;align-items:center;gap:6px">' + k.delta + '<span class="kpi-compare">' + prevLabel + '</span></div>' : '';
            return '<div class="kpi-card" style="--kpi-color:' + k.color + '">' +
                '<div class="kpi-bar"></div>' +
                '<div class="kpi-label">' + t(k.id) + '</div>' +
                '<div class="kpi-value">' + k.value + '</div>' +
                '<div class="kpi-sub"><span class="kpi-dot"></span>' + k.sub + '</div>' +
                deltaHtml +
                '</div>';
        }).join('');
    },

    renderEscalation: function(data, panelId, prevDataParam) {
        panelId = panelId || 'escalationPanel';
        var panel = document.getElementById(panelId);
        if (!panel) return;

        var stats = DataProcessor.calculateEscalationStats(data);

        var prevData = (prevDataParam !== undefined) ? prevDataParam : DataProcessor.getPreviousPeriodData(appState.tickets, appState.filters);
        var prevStats = (prevData && prevData.length) ? DataProcessor.calculateEscalationStats(prevData) : null;
        var hasPrev = prevStats !== null && prevStats.total > 0;
        var prevLabel = UIRenderer._getPrevLabel();

        var html = '<div class="escalation-stats">' +
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
                stats.byProduct.map(function(x) {
                    var clr = CONFIG.CHART.colors[x.name] || '#5b73ff';
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
                stats.byTier.map(function(x) {
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
                stats.byType.map(function(x) {
                    return '<span class="esc-chip" style="background:' + Utils.Color.toRGBA(x.color, 0.15) + ';color:' + x.color + '">' + x.name + ' <strong>' + x.total + '</strong>' + (x.active > 0 ? ' <span style="background:' + Utils.Color.toRGBA('#fb923c', 0.25) + ';color:#fb923c;padding:0 4px;border-radius:3px;font-size:10px">' + x.active + ' ' + t('active') + '</span>' : '') + '</span>';
                }).join('') +
                '</div>' +
                '</div>' +
                '</div>';
        }

        if (stats.active > 0) {
            var rows = stats.activeRows.map(function(r) {
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

    renderCharts: function(data) {
        UIRenderer._renderPriorityChart(data);
        UIRenderer._renderTierChart(data);
        UIRenderer._renderProductChart(data);
        UIRenderer._renderFeatureChart(data);
        UIRenderer._renderStaffChart(data);
        UIRenderer._renderTrendChart(data);
        UIRenderer._renderShiftChart(data);
    },

    _renderPriorityChart: function(data, canvasId, legendId) {
        canvasId = canvasId || 'chartPriority';
        legendId = legendId || 'legendPriority';
        var chartData = DataProcessor.preparePriorityData(data);
        var chart = ChartEngine.createDoughnut(
            canvasId,
            chartData.labels,
            chartData.values,
            chartData.colors
        );

        var legend = document.getElementById(legendId);
        if (legend) {
            legend.innerHTML = chartData.labels.map(function(label, i) {
                return '<div class="legend-item">' +
                    '<div class="legend-dot" style="background:' + chartData.colors[i] + '"></div>' +
                    label + ' <strong style="color:' + chartData.colors[i] + '">' + chartData.values[i] + '</strong>' +
                    '</div>';
            }).join('');
        }
    },

    _renderTierChart: function(data, canvasId, legendId) {
        canvasId = canvasId || 'chartTier';
        legendId = legendId || 'legendTier';
        var chartData = DataProcessor.prepareTierData(data);
        if (chartData.labels.length === 0) return;

        ChartEngine.createStackedBar(
            canvasId,
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );

        var legend = document.getElementById(legendId);
        if (legend) {
            var html = '';
            html += '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.non + '"></div>' + t('nonIssue') + '</div>';
            html += '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.issue + '"></div>' + t('issue') + '</div>';
            chartData.labels.forEach(function(label, i) {
                var rawTier = chartData.rawTiers[i];
                var color = CONFIG.CHART.colors[rawTier] || ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5];
                html += '<div class="legend-item"><div class="legend-dot" style="background:' + color + '"></div>' + label + ' <strong>' + chartData.totals[i] + '</strong></div>';
            });
            legend.innerHTML = html;
        }
    },

    _renderProductChart: function(data, canvasId) {
        canvasId = canvasId || 'chartProduct';
        var chartData = DataProcessor.prepareProductData(data);
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

    _renderFeatureChart: function(data, canvasId) {
        canvasId = canvasId || 'chartFeature';
        var chartData = DataProcessor.prepareFeatureData(data);
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

    _renderStaffChart: function(data, canvasId) {
        canvasId = canvasId || 'chartTicketStaff';
        var chartData = DataProcessor.prepareStaffData(data);
        if (chartData.labels.length === 0) {
            var container = document.getElementById(canvasId)?.parentElement;
            if (container) container.innerHTML = '<div class="task-empty">' + t('noData') + '</div>';
            return;
        }
        ChartEngine.createSingleBar(canvasId, chartData.labels, chartData.values);
    },

    _renderTrendChart: function(data) {
        var chartData = DataProcessor.prepareTrendData(data);
        if (chartData.labels.length === 0) return;

        var labels = chartData.labels.map(function(label) {
            var parts = label.split(' ');
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

        var comp = document.getElementById('trendComparison');
        if (comp) {
            var half = Math.floor(chartData.issue.length / 2);

            var cmp = function(arr, label) {
                var prev = arr.slice(0, half).reduce(function(a, b) { return a + b; }, 0);
                var cur = arr.slice(half).reduce(function(a, b) { return a + b; }, 0);
                if (!prev && !cur) return '<div class="trend-badge flat">→ ' + label + ' ' + t('stable') + '</div>';
                var delta = cur - prev;
                var pct = prev > 0 ? Math.abs(Math.round((delta / prev) * 100)) : 100;
                if (delta > 0) return '<div class="trend-badge up">↑ ' + label + ' +' + pct + '%</div>';
                if (delta < 0) return '<div class="trend-badge down">↓ ' + label + ' −' + pct + '%</div>';
                return '<div class="trend-badge flat">→ ' + label + ' ' + t('stable') + '</div>';
            };

            comp.innerHTML = cmp(chartData.issue, t('issue')) + cmp(chartData.nonIssue, t('nonIssue')) +
                '<span class="trend-context">' + t('trendContext') + '</span>';
        }
    },

    _renderShiftChart: function(data, canvasId, legendId, subtitleId) {
        canvasId = canvasId || 'chartShift';
        legendId = legendId || 'legendShift';
        subtitleId = subtitleId || 'chartShiftSub';

        var canonicalShifts = ['Pagi', 'Siang', 'Malam'];
        var shifts = canonicalShifts.filter(function(s) { return data.some(function(r) { return r.shift === s; }); });

        if (shifts.length === 0 || data.length === 0) {
            var container = document.getElementById(canvasId)?.parentElement;
            if (container) container.innerHTML = '<div class="task-empty">' + t('noData') + '</div>';
            return;
        }

        var nonIssue = shifts.map(function(s) { return data.filter(function(r) { return r.shift === s && r.type === 'Non Issue'; }).length; });
        var issue = shifts.map(function(s) { return data.filter(function(r) { return r.shift === s && r.type === 'Issue'; }).length; });
        var totals = shifts.map(function(s) { return data.filter(function(r) { return r.shift === s; }).length; });

        var shiftLabelMap = { Pagi: t('morning'), Siang: t('day'), Malam: t('night') };
        var labels = shifts.map(function(s) { return shiftLabelMap[s] || s; });

        var subtitleEl = document.getElementById(subtitleId);
        if (subtitleEl) {
            subtitleEl.textContent = labels.join(' · ');
        }

        ChartEngine.createStackedBar(
            canvasId,
            labels,
            [
                { label: t('issue'), data: issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );

        var legend = document.getElementById(legendId);
        if (legend) {
            legend.innerHTML = shifts.map(function(shift, i) {
                return '<div class="legend-item">' +
                    '<div class="legend-dot" style="background:' + CONFIG.CHART.colors[shift] + '"></div>' +
                    labels[i] + ' <strong style="color:' + CONFIG.CHART.colors[shift] + '">' + totals[i] + '</strong>' +
                    '</div>';
            }).join('');
        }
    },

    renderTaskSection: function(tasks, filters) {
        var filtered = FilterEngine.applyTaskFilters(tasks, filters);
        var prevData = FilterEngine.getPreviousTaskData(tasks, filters);
        var prevMetrics = prevData.length ? DataProcessor.calculateTaskMetrics(prevData) : null;
        var prevLabel = UIRenderer._getPrevLabel();

        var metrics = DataProcessor.calculateTaskMetrics(filtered);
        var completionRate = metrics.total > 0 ? Math.round((metrics.done / metrics.total) * 100) : 0;

        var taskStats = [
            { id: 'totalTasks', value: metrics.total, color: '#5b73ff', sub: t('totalTasks') },
            { id: 'done', value: metrics.done, color: '#10b981', sub: completionRate + '% ' + t('completed') },
            { id: 'progress', value: metrics.progress, color: '#f59e0b', sub: t('inProgress') },
            { id: 'totalWorkHours', value: Utils.Duration.formatHMS(metrics.totalMinutes), color: '#8b5cf6', sub: metrics.staffCount + ' ' + t('activeStaff') },
        ];

        var grid = document.getElementById('taskKpiGrid');
        if (grid) {
            grid.innerHTML = taskStats.map(function(s) {
                var deltaHtml = prevMetrics ? '<div style="margin-top:6px;display:flex;align-items:center;gap:6px">' + UIRenderer._deltaTag(metrics.total, prevMetrics.total, false) + '<span class="kpi-compare">' + prevLabel + '</span></div>' : '';
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

        var statusData = [];
        var statusLabels = [];
        var statusColors = [];
        if (metrics.done > 0) { statusLabels.push('Done');
            statusData.push(metrics.done);
            statusColors.push('#10b981'); }
        if (metrics.progress > 0) { statusLabels.push('Progress');
            statusData.push(metrics.progress);
            statusColors.push('#f59e0b'); }

        if (statusData.length) {
            ChartEngine.createDoughnut('chartTaskStatus', statusLabels, statusData, statusColors);
            var legend = document.getElementById('legendTaskStatus');
            if (legend) {
                legend.innerHTML = statusLabels.map(function(label, i) {
                    return '<div class="legend-item">' +
                        '<div class="legend-dot" style="background:' + statusColors[i] + '"></div>' +
                        label + ' <strong style="color:' + statusColors[i] + '">' + statusData[i] + '</strong>' +
                        '<span style="color:var(--text-muted)">(' + Math.round((statusData[i] / filtered.length) * 100) + '%)</span>' +
                        '</div>';
                }).join('');
            }
        }

        var staffData = UIRenderer._prepareTaskStaffData(filtered);
        if (staffData.labels.length) {
            ChartEngine.createSingleBar('chartTaskStaff', staffData.labels, staffData.values);
        } else {
            var container = document.getElementById('chartTaskStaff')?.parentElement;
            if (container) container.innerHTML = '<div class="task-empty">' + t('noData') + '</div>';
        }

        UIRenderer._populateTaskFilters(filtered);
        UIRenderer.renderTaskTable(filtered);
    },

    _prepareTaskStaffData: function(data) {
        var staffs = Utils.Array.distinct(data.map(function(t) { return t.staff; })).sort();
        var counts = staffs.map(function(s) { return data.filter(function(t) { return t.staff === s; }).length; });
        var combined = staffs.map(function(s, i) { return { label: s, count: counts[i] }; })
            .filter(function(x) { return x.count > 0; })
            .sort(function(a, b) { return b.count - a.count; });
        return {
            labels: combined.map(function(x) { return x.label.split(' ').slice(0, 2).join(' '); }),
            values: combined.map(function(x) { return x.count; }),
        };
    },

    _populateTaskFilters: function(data) {
        var staffs = Utils.Array.distinct(data.map(function(t) { return t.staff; })).sort();

        var staffSelect = document.getElementById('taskFilterStaffSelect');
        if (staffSelect) {
            var currentVal = staffSelect.value;
            staffSelect.innerHTML = '<option value="all">' + t('taskAllStaff') + '</option>';
            staffs.forEach(function(s) {
                var opt = document.createElement('option');
                opt.value = s;
                opt.textContent = s;
                staffSelect.appendChild(opt);
            });
            if (staffSelect.querySelector('option[value="' + currentVal + '"]')) {
                staffSelect.value = currentVal;
            }
        }

        var ticketStaffSelect = document.getElementById('filterStaff');
        if (ticketStaffSelect && ticketStaffSelect.options.length <= 1) {
            var ticketStaffs = DataProcessor.getStaffList(appState.tickets);
            ticketStaffs.forEach(function(s) {
                var opt = document.createElement('option');
                opt.value = s;
                opt.textContent = s;
                ticketStaffSelect.appendChild(opt);
            });
        }
    },

    renderTaskTable: function(data) {
        var search = appState.ui.taskSearch || '';
        var staffFilter = appState.ui.taskFilterStaff || 'all';
        var statusFilter = appState.ui.taskFilterStatus || 'all';

        var filtered = data.filter(function(t) {
            if (staffFilter !== 'all' && t.staff !== staffFilter) return false;
            if (statusFilter !== 'all' && t.status !== statusFilter) return false;
            if (search && t.task.toLowerCase().indexOf(search) === -1 && t.staff.toLowerCase().indexOf(search) === -1)
                return false;
            return true;
        });

        filtered = filtered.slice().sort(function(a, b) { return Utils.Date.parseTaskDate(b.start) - Utils.Date.parseTaskDate(a.start); });

        var pageSize = CONFIG.PAGINATION.pageSize;
        var totalPages = Utils.Array.totalPages(filtered, pageSize);
        var currentPage = Math.min(appState.ui.taskPage, totalPages);
        var pageItems = Utils.Array.paginate(filtered, currentPage, pageSize);

        var tbody = document.getElementById('taskTableBody');
        if (!tbody) return;

        if (pageItems.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6"><div class="task-empty">' + t('noTasks') + '</div></td></tr>';
            UIRenderer._renderPagination(0, 0);
            return;
        }

        tbody.innerHTML = pageItems.map(function(t) {
            var statusColor = t.status === 'Done' ? '#10b981' : '#f59e0b';
            var initials = Utils.String.escapeHtml(Utils.String.getInitials(t.staff));
            var tags = (t.note || '').split(' ').filter(function(x) { return x.indexOf('#') === 0; });
            var tagHtml = tags.length ?
                tags.map(function(tag) { return '<span class="task-tag">' + Utils.String.escapeHtml(tag) + '</span>'; }).join(' ') :
                (t.note ? '<span style="font-size:11px;color:var(--text-muted)">' + Utils.String.escapeHtml(t.note) + '</span>' : '-');
            var staffShort = Utils.String.escapeHtml(t.staff.split(' ').slice(0, 2).join(' '));

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

    _renderPagination: function(totalItems, totalPages) {
        var el = document.getElementById('taskPagination');
        if (!el) return;

        var page = Math.min(appState.ui.taskPage, totalPages || 1);
        var startIdx = (page - 1) * CONFIG.PAGINATION.pageSize + 1;
        var endIdx = Math.min(page * CONFIG.PAGINATION.pageSize, totalItems);

        var infoText = totalItems > 0 ?
            t('showing') + ' ' + startIdx + '–' + endIdx + ' ' + t('from') + ' ' + totalItems + ' ' + t('totalTasks').toLowerCase() :
            t('noTasks');

        if (totalPages <= 1) {
            el.innerHTML = '<div class="pagination-info">' + infoText + '</div>';
            return;
        }

        var pages = [];
        var windowSize = 1;
        for (var p = 1; p <= totalPages; p++) {
            if (p === 1 || p === totalPages || Math.abs(p - page) <= windowSize) {
                pages.push(p);
            } else if (pages[pages.length - 1] !== '…') {
                pages.push('…');
            }
        }

        var btnsHtml = pages.map(function(pg) {
            if (pg === '…') return '<span class="pagination-ellipsis">…</span>';
            return '<button class="pagination-btn' + (pg === page ? ' active' : '') + '" data-page="' + pg + '">' + pg + '</button>';
        }).join('');

        el.innerHTML = '<div class="pagination-info">' + infoText + '</div>' +
            '<div class="pagination-buttons">' +
            '<button class="pagination-btn" data-page="prev" ' + (page <= 1 ? 'disabled' : '') + '>&lsaquo;</button>' +
            btnsHtml +
            '<button class="pagination-btn" data-page="next" ' + (page >= totalPages ? 'disabled' : '') + '>&rsaquo;</button>' +
            '</div>';

        el.querySelectorAll('.pagination-btn[data-page]').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var target = btn.dataset.page;
                var newPage;
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

    renderMTM: function() {
        var filters = appState.mtmFilters;
        var badge = document.getElementById('mtmBadge');
        var emptyState = document.getElementById('mtmEmptyState');
        var content = document.getElementById('mtmContent');

        var data = DataProcessor.prepareMonthlyComparison(appState.tickets, filters.monthFrom, filters.monthTo);

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
            ChartEngine.destroy('chartMTMTierCompare');
            ChartEngine.destroy('chartMTMProductCompare');
            ChartEngine.destroy('chartMTMStaffCompare');
            ChartEngine.destroy('chartMTMFeatureCompare');
            ChartEngine.destroy('chartMTMShiftCompare');
            return;
        }

        if (emptyState) emptyState.style.display = 'none';
        if (content) content.style.display = 'block';
        if (badge) badge.textContent = t('mtmMonthsCompared', { count: data.buckets.length });

        UIRenderer._renderMTMTable(data.buckets);
        UIRenderer._renderMTMCharts(data.buckets);
    },

    _renderMTMTable: function(buckets) {
        var table = document.getElementById('mtmTable');
        if (!table) return;

        var metrics = [
            { id: 'totalTickets', get: function(k) { return k.total; }, fmt: function(v) { return String(v); }, invert: false },
            { id: 'closed', get: function(k) { return k.closed; }, fmt: function(v) { return String(v); }, invert: false },
            { id: 'issue', get: function(k) { return k.issue; }, fmt: function(v) { return String(v); }, invert: true },
            { id: 'nonIssue', get: function(k) { return k.nonIssue; }, fmt: function(v) { return String(v); }, invert: false },
            { id: 'activeEsc', get: function(k) { return k.activeEsc; }, fmt: function(v) { return String(v); }, invert: true },
            { id: 'aht', get: function(k) { return k.aht; }, fmt: function(v) { return Utils.Duration.formatAHT(v); }, invert: true },
            { id: 'avgResponseTime', get: function(k) { return null; }, fmt: function(v) { return '-'; }, invert: false, empty: true },
            { id: 'sla', get: function(k) { return k.slaRate; }, fmt: function(v) { return v.toFixed(1) + '%'; }, invert: false },
        ];

        var head = '<thead><tr><th>' + t('mtmMetricHeader') + '</th>' +
            buckets.map(function(b) { return '<th>' + b.label + '</th>'; }).join('') +
            '</tr></thead>';

        var body = '<tbody>' + metrics.map(function(m) {
            var cells = buckets.map(function(b, i) {
                if (m.empty) {
                    return '<td><div class="mtm-cell-value">-</div></td>';
                }
                var val = m.get(b.kpi);
                var display = m.fmt(val);
                var deltaHtml = '';
                if (i > 0) {
                    var prevVal = m.get(buckets[i - 1].kpi);
                    deltaHtml = UIRenderer._deltaTag(val, prevVal, m.invert);
                }
                return '<td><div class="mtm-cell-value">' + display + '</div>' + (deltaHtml ? '<div class="mtm-cell-delta">' + deltaHtml + '</div>' : '') + '</td>';
            }).join('');
            return '<tr><td class="mtm-row-label">' + t(m.id) + '</td>' + cells + '</tr>';
        }).join('') + '</tbody>';

        table.innerHTML = head + body;
    },

    _renderMTMCharts: function(buckets) {
        var labels = buckets.map(function(b) { return b.label; });

        var issue = buckets.map(function(b) { return b.kpi.issue; });
        var nonIssue = buckets.map(function(b) { return b.kpi.nonIssue; });

        ChartEngine.createStackedBar('chartMTMVolume', labels, [
            { label: t('issue'), data: issue, color: CONFIG.CHART.colors.issue },
            { label: t('nonIssue'), data: nonIssue, color: CONFIG.CHART.colors.non },
        ]);

        var legendVol = document.getElementById('legendMTMVolume');
        if (legendVol) {
            legendVol.innerHTML =
                '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.non + '"></div>' + t('nonIssue') + '</div>' +
                '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors.issue + '"></div>' + t('issue') + '</div>';
        }

        var closedValues = buckets.map(function(b) { return b.kpi.closed; });
        ChartEngine.createLine('chartMTMClosed', labels, [
            { label: t('closed'), data: closedValues, color: '#10b981' },
        ]);

        ChartEngine.createLine('chartMTMIssue', labels, [
            { label: t('issue'), data: issue, color: CONFIG.CHART.colors.issue },
        ]);

        ChartEngine.createLine('chartMTMNonIssue', labels, [
            { label: t('nonIssue'), data: nonIssue, color: CONFIG.CHART.colors.non },
        ]);

        var activeEscValues = buckets.map(function(b) { return b.kpi.activeEsc; });
        ChartEngine.createLine('chartMTMActiveEsc', labels, [
            { label: t('activeEsc'), data: activeEscValues, color: '#fb923c' },
        ]);

        var artValues = buckets.map(function() { return null; });
        ChartEngine.createLine('chartMTMART', labels, [
            { label: t('avgResponseTime'), data: artValues, color: '#06b6d4' },
        ]);

        var priDatasets = CONFIG.PRIORITIES.map(function(p) {
            return {
                label: p,
                data: buckets.map(function(b) {
                    var idx = b.priority.labels.indexOf(p);
                    return idx !== -1 ? b.priority.values[idx] : 0;
                }),
                color: CONFIG.CHART.colors[p],
            };
        });

        ChartEngine.createStackedBar('chartMTMPriority', labels, priDatasets);

        var legendPri = document.getElementById('legendMTMPriority');
        if (legendPri) {
            legendPri.innerHTML = CONFIG.PRIORITIES.map(function(p) {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + CONFIG.CHART.colors[p] + '"></div>' + p + '</div>';
            }).join('');
        }

        var ahtValues = buckets.map(function(b) { return Utils.Math.round(b.kpi.aht, 1); });
        ChartEngine.createLine('chartMTMAHT', labels, [
            { label: t('aht'), data: ahtValues, color: '#8b5cf6' },
        ]);

        var slaValues = buckets.map(function(b) { return Utils.Math.round(b.kpi.slaRate, 1); });
        ChartEngine.createLine('chartMTMSLA', labels, [
            { label: t('sla'), data: slaValues, color: '#10b981' },
        ]);

        var tierData = DataProcessor.prepareMonthlyTierComparison(buckets);
        ChartEngine.createStackedBar('chartMTMTierCompare', tierData.labels, tierData.datasets);
        var legendTierCompare = document.getElementById('legendMTMTierCompare');
        if (legendTierCompare) {
            legendTierCompare.innerHTML = tierData.datasets.map(function(ds) {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }

        var productData = DataProcessor.prepareMonthlyProductComparison(buckets);
        ChartEngine.createStackedBar('chartMTMProductCompare', productData.labels, productData.datasets);
        var legendProductCompare = document.getElementById('legendMTMProductCompare');
        if (legendProductCompare) {
            legendProductCompare.innerHTML = productData.datasets.map(function(ds) {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }

        var staffCompareData = DataProcessor.prepareMonthlyStaffComparison(buckets);
        ChartEngine.createStackedBar('chartMTMStaffCompare', staffCompareData.labels, staffCompareData.datasets);
        var legendStaffCompare = document.getElementById('legendMTMStaffCompare');
        if (legendStaffCompare) {
            legendStaffCompare.innerHTML = staffCompareData.datasets.map(function(ds) {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }

        var featureCompareData = DataProcessor.prepareMonthlyFeatureComparison(buckets);
        ChartEngine.createStackedBar('chartMTMFeatureCompare', featureCompareData.labels, featureCompareData.datasets);
        var legendFeatureCompare = document.getElementById('legendMTMFeatureCompare');
        if (legendFeatureCompare) {
            legendFeatureCompare.innerHTML = featureCompareData.datasets.map(function(ds) {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }

        var shiftCompareData = DataProcessor.prepareMonthlyShiftComparison(buckets);
        ChartEngine.createStackedBar('chartMTMShiftCompare', shiftCompareData.labels, shiftCompareData.datasets);
        var legendShiftCompare = document.getElementById('legendMTMShiftCompare');
        if (legendShiftCompare) {
            legendShiftCompare.innerHTML = shiftCompareData.datasets.map(function(ds) {
                return '<div class="legend-item"><div class="legend-dot" style="background:' + ds.color + '"></div>' + ds.label + '</div>';
            }).join('');
        }
    },

    updateSyncStatus: function(status, timestamp) {
        var dot = document.getElementById('syncDot');
        var label = document.getElementById('syncLabel');
        var badge = document.getElementById('syncBadge');

        if (!dot || !label) return;

        var ts = timestamp ? timestamp.toLocaleTimeString(getLang() === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit' }) : '';

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

    _deltaTag: function(cur, prev, invertGood) {
        invertGood = invertGood || false;
        if (prev === 0 && cur === 0) return '<span class="kpi-delta neutral">→ 0</span>';
        if (prev === 0) {
            var cls = invertGood ? 'down-bad' : 'up-good';
            return '<span class="kpi-delta ' + cls + '">↑ new</span>';
        }
        var diff = cur - prev;
        var pct = Math.abs(Math.round((diff / prev) * 100));
        if (diff === 0) return '<span class="kpi-delta neutral">→ 0%</span>';
        if (diff > 0) {
            var clsUp = invertGood ? 'up' : 'up-good';
            return '<span class="kpi-delta ' + clsUp + '">↑ +' + pct + '%</span>';
        }
        var clsDown = invertGood ? 'down' : 'down-bad';
        return '<span class="kpi-delta ' + clsDown + '">↓ −' + pct + '%</span>';
    },

    _deltaAHT: function(cur, prev) {
        if (prev === 0 && cur === 0) return '<span class="kpi-delta neutral">→ 0%</span>';
        if (prev === 0) return '';
        var diff = cur - prev;
        var pct = Math.abs(Math.round((diff / prev) * 100));
        if (diff === 0) return '<span class="kpi-delta neutral">→ 0%</span>';
        if (diff > 0) return '<span class="kpi-delta down-bad">↑ +' + pct + '%</span>';
        return '<span class="kpi-delta up-good">↓ −' + pct + '%</span>';
    },

    _getPrevLabel: function() {
        var week = appState.filters.week, dateFrom = appState.filters.dateFrom, dateTo = appState.filters.dateTo;
        if (dateFrom || dateTo) return t('vsPrevPeriod');
        if (week !== 'all') return t('vsPrevWeek');
        return t('vsPrevHalf');
    },

    populateDynamicFilters: function(tickets, tasks) {
        var combinedForMonth = tickets.concat(tasks);

        UIRenderer._populateFilter('filterMonth', combinedForMonth, 'month', 'allMonths', function(v) { return v.replace(/\[\d+\]\s*/, ''); }, function(a, b) {
            var na = UIRenderer._MONTH_ORDER[a.label.trim().toLowerCase()] ?? 999;
            var nb = UIRenderer._MONTH_ORDER[b.label.trim().toLowerCase()] ?? 999;
            if (na !== nb) return na - nb;
            return a.label.localeCompare(b.label, 'en', { sensitivity: 'base' });
        });
        UIRenderer._populateFilter('filterWeek', tickets, 'week', 'allWeeks');
        UIRenderer._populateFilter('filterProduct', tickets, 'product', 'allProducts');
        UIRenderer._populateFilter('filterTier', tickets, 'tier', 'allTiers', function(v) { return Utils.String.formatTier(v); });
        UIRenderer._populateShiftFilter();
        UIRenderer._populateFilter('filterStaff', tickets, 'staff', 'allStaff');
        UIRenderer._populateFilter('filterTaskStaff', tasks, 'staff', 'allStaff');
        UIRenderer._populateTaskStaffFilter(tasks);
        UIRenderer._populateMTMMonthRangeFilters(tickets);
    },

    _MONTH_ORDER: {
        january: 1, februari: 2, february: 2, march: 3, maret: 3, april: 4,
        may: 5, mei: 5, june: 6, juni: 6, july: 7, juli: 7, august: 8, agustus: 8,
        september: 9, october: 10, oktober: 10, november: 11, december: 12, desember: 12,
    },

    _populateFilter: function(selectId, data, key, allLabelKey, formatFn, sortFn) {
        var select = document.getElementById(selectId);
        if (!select) return;

        var currentVal = select.value;
        var rawValues = Utils.Array.distinct(data.map(function(r) { return r[key]; })).filter(Boolean);

        var defaultSort = function(a, b) { return a.label.localeCompare(b.label, 'en', { sensitivity: 'base' }); };

        var options = rawValues.map(function(val) {
            return { val: val, label: (formatFn ? formatFn(val) : val).trim() };
        }).sort(sortFn || defaultSort);

        select.innerHTML = '<option value="all">' + t(allLabelKey) + '</option>';

        options.forEach(function(opt) {
            var option = document.createElement('option');
            option.value = opt.val;
            option.textContent = opt.label;
            select.appendChild(option);
        });

        if (Array.from(select.options).some(function(o) { return o.value === currentVal; })) {
            select.value = currentVal;
        }
    },

    _populateShiftFilter: function() {
        var select = document.getElementById('filterShift');
        if (!select) return;

        var currentVal = select.value;
        var shifts = [
            { value: 'Pagi', label: t('morning') },
            { value: 'Siang', label: t('day') },
            { value: 'Malam', label: t('night') },
        ];

        select.innerHTML = '<option value="all">' + t('allShifts') + '</option>';
        shifts.forEach(function(s) {
            var opt = document.createElement('option');
            opt.value = s.value;
            opt.textContent = s.label;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(function(o) { return o.value === currentVal; })) {
            select.value = currentVal;
        }
    },

    _populateMTMMonthRangeFilters: function(tickets) {
        var rawValues = Utils.Array.distinct(tickets.map(function(r) { return r.month; })).filter(Boolean);

        var options = rawValues.map(function(val) {
            return { val: val, label: val.replace(/\[\d+\]\s*/, '').trim() };
        }).sort(function(a, b) {
            var na = UIRenderer._MONTH_ORDER[a.label.trim().toLowerCase()] ?? 999;
            var nb = UIRenderer._MONTH_ORDER[b.label.trim().toLowerCase()] ?? 999;
            if (na !== nb) return na - nb;
            return a.label.localeCompare(b.label, 'en', { sensitivity: 'base' });
        });

        ['filterMTMMonthFrom', 'filterMTMMonthTo'].forEach(function(id) {
            var select = document.getElementById(id);
            if (!select) return;

            var currentVal = select.value;
            select.innerHTML = '';

            options.forEach(function(opt) {
                var option = document.createElement('option');
                option.value = opt.val;
                option.textContent = opt.label;
                select.appendChild(option);
            });

            if (Array.from(select.options).some(function(o) { return o.value === currentVal; })) {
                select.value = currentVal;
            }
        });
    },

    _populateTaskStaffFilter: function(tasks) {
        var select = document.getElementById('taskFilterStaffSelect');
        if (!select) return;

        var staffs = Utils.Array.distinct(tasks.map(function(t) { return t.staff; }).filter(Boolean)).sort();
        var currentVal = select.value;

        select.innerHTML = '<option value="all">' + t('taskAllStaff') + '</option>';

        staffs.forEach(function(staff) {
            var opt = document.createElement('option');
            opt.value = staff;
            opt.textContent = staff;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(function(o) { return o.value === currentVal; })) {
            select.value = currentVal;
        }
    },
};

/* ================================================================
   EVENT HANDLERS
   ================================================================ */

var EventHandlers = {

    init: function() {
        var filterIds = ['filterMonth', 'filterWeek', 'filterProduct', 'filterTier', 'filterShift', 'filterStaff', 'filterTaskStaff'];
        var self = this;

        filterIds.forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('change', function() { self.onFilterChange(); });
        });

        ['filterDateFrom', 'filterDateTo'].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('change', function() { self.onFilterChange(); });
        });

        var resetBtn = document.getElementById('btnResetFilters');
        if (resetBtn) resetBtn.addEventListener('click', function() { self.onResetFilters(); });

        document.querySelectorAll('.menu-tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                var menu = tab.dataset.menu;
                if (menu) self.onMenuChange(menu);
            });
        });

        document.getElementById('btnLang')?.addEventListener('click', function() {
            var currentLang = appState.ui.language;
            var newLang = currentLang === 'id' ? 'en' : 'id';
            self.onLanguageChange(newLang);
        });

        document.getElementById('btnTheme')?.addEventListener('click', function() {
            toggleTheme();
            self.refreshUI();
            if (appState.ui.currentMenu === 'mtm') UIRenderer.renderMTM();
        });

        document.getElementById('btnRefresh')?.addEventListener('click', function() { self.onRefresh(); });
        document.getElementById('syncBadge')?.addEventListener('click', function() { self.onRefresh(); });

        var searchInput = document.getElementById('taskSearchInput');
        if (searchInput) {
            var debounced = Utils.debounce(function() { self.onTaskSearch(); }, 300);
            searchInput.addEventListener('input', debounced);
        }

        ['taskFilterStaffSelect', 'taskFilterStatusSelect'].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('change', function() { self.onTaskFilterChange(); });
        });

        ['filterMTMMonthFrom', 'filterMTMMonthTo'].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('change', function() { self.onMTMFilterChange(); });
        });

        var resetMTMBtn = document.getElementById('btnResetMTMFilters');
        if (resetMTMBtn) resetMTMBtn.addEventListener('click', function() { self.onResetMTMFilters(); });
    },

    _validateDateRange: function() {
        var fromInput = document.getElementById('filterDateFrom');
        var toInput = document.getElementById('filterDateTo');
        var errorEl = document.getElementById('filterDateError');
        if (!fromInput || !toInput) return true;

        var fromVal = fromInput.value;
        var toVal = toInput.value;
        var isInvalid = false;

        if (fromVal && toVal) {
            var from = Utils.Date.parseDateInput(fromVal);
            var to = Utils.Date.parseDateInput(toVal);
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

    _readMTMFilters: function() {
        appState.mtmFilters.monthFrom = document.getElementById('filterMTMMonthFrom')?.value || '';
        appState.mtmFilters.monthTo = document.getElementById('filterMTMMonthTo')?.value || '';
    },

    _setDefaultMTMPeriod: function() {
        var fromSelect = document.getElementById('filterMTMMonthFrom');
        var toSelect = document.getElementById('filterMTMMonthTo');
        if (!fromSelect || !toSelect || !fromSelect.options.length || !toSelect.options.length) return;

        var now = new Date();
        var prevDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);

        var curCandidates = [
            now.toLocaleDateString('en-US', { month: 'long' }),
            now.toLocaleDateString('id-ID', { month: 'long' }),
        ].map(function(s) { return s.trim().toLowerCase(); });

        var prevCandidates = [
            prevDate.toLocaleDateString('en-US', { month: 'long' }),
            prevDate.toLocaleDateString('id-ID', { month: 'long' }),
        ].map(function(s) { return s.trim().toLowerCase(); });

        var findMatch = function(select, candidates) {
            for (var i = 0; i < select.options.length; i++) {
                var opt = select.options[i];
                var clean = opt.value.replace(/\[\d+\]\s*/, '').trim().toLowerCase();
                if (candidates.indexOf(clean) !== -1) return opt.value;
            }
            return null;
        };

        var toMatch = findMatch(toSelect, curCandidates);
        var fromMatch = findMatch(fromSelect, prevCandidates);

        if (!toMatch || !fromMatch) {
            var opts = Array.prototype.map.call(toSelect.options, function(o) { return o.value; });
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

    onMTMFilterChange: function() {
        this._readMTMFilters();
        UIRenderer.renderMTM();
    },

    onResetMTMFilters: function() {
        this._setDefaultMTMPeriod();
        this._readMTMFilters();
        UIRenderer.renderMTM();
    },

    onFilterChange: function() {
        if (!this._validateDateRange()) {
            return;
        }
        this.validateFilters();
        this._applyFilters();
        this.refreshUI();
    },

    onResetFilters: function() {
        var defaults = {
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

        var self = this;
        Object.keys(defaults).forEach(function(id) {
            var el = document.getElementById(id);
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
        this.refreshUI();
    },

    onMenuChange: function(menu) {
        appState.ui.currentMenu = menu;

        document.querySelectorAll('.menu-tab').forEach(function(tab) {
            tab.classList.toggle('active', tab.dataset.menu === menu);
            tab.setAttribute('aria-selected', tab.dataset.menu === menu);
        });

        document.querySelectorAll('.menu-panel').forEach(function(panel) {
            panel.classList.toggle('active', panel.id === 'panel' + Utils.String.capitalize(menu));
        });

        var filterBar = document.querySelector('.filter-bar');
        if (filterBar) filterBar.style.display = menu === 'mtm' ? 'none' : '';

        var dimGroup = document.getElementById('filterDimensionGroup');
        var taskDimGroup = document.getElementById('filterTaskDimensionGroup');
        var dimSep = document.getElementById('filterSeparatorDim');
        if (dimGroup) dimGroup.style.display = menu === 'ticket' ? '' : 'none';
        if (taskDimGroup) taskDimGroup.style.display = menu === 'task' ? '' : 'none';
        if (dimSep) dimSep.style.display = '';

        if (menu === 'mtm') {
            UIRenderer.renderMTM();
        }
    },

    onLanguageChange: function(lang) {
        appState.ui.language = lang;
        var btnLang = document.getElementById('btnLang');
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

    applyStaticTranslations: function() {
        var map = {
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
            chartFeatTitle: 'featTitle', chartFeatSub: 'featSub',
            chartTrendTitle: 'trendTitle', chartTrendSub: 'trendSub',
            chartShiftTitle: 'shiftTitle',
            lblTaskOverview: 'taskOverview',
            chartTaskStatusTitle: 'taskStatusTitle', chartTaskStatusSub: 'taskStatusSub',
            chartTaskStaffTitle: 'taskStaffTitle', chartTaskStaffSub: 'taskStaffSub',
            chartTaskTableTitle: 'taskTableTitle', chartTaskTableSub: 'taskTableSub',
            optTaskAllStaff: 'taskAllStaff',
            optTaskAllStatus: 'taskAllStatus',
            thTaskStaff: 'thStaff',
            lblMenuMTM: 'menuMTM',
            lblMTMOverview: 'mtmOverview',
            lblMTMDateTo: 'to',
            lblMTMPeriod: 'period',
            chartMTMTierTitle: 'mtmTierTitle', chartMTMTierSub: 'mtmTierSub',
            chartMTMProdTitle: 'mtmProdTitle', chartMTMProdSub: 'mtmProdSub',
            chartMTMStaffTitle: 'mtmStaffTitle', chartMTMStaffSub: 'mtmStaffSub',
            chartMTMFeatTitle: 'mtmFeatTitle', chartMTMFeatSub: 'mtmFeatSub',
            chartMTMShiftTitle: 'mtmShiftTitle',
            btnResetMTMFilters: 'reset',
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
        };
        Object.keys(map).forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.textContent = t(map[id]);
        });

        var searchInput = document.getElementById('taskSearchInput');
        if (searchInput) searchInput.placeholder = t('taskSearchPlaceholder');
    },

    onRefresh: function() {
        this._refreshData();
    },

    onTaskSearch: function() {
        var input = document.getElementById('taskSearchInput');
        appState.ui.taskSearch = input ? input.value.toLowerCase() : '';
        appState.ui.taskPage = 1;
        UIRenderer.renderTaskTable(appState.filteredTasks);
    },

    onTaskFilterChange: function() {
        var staffSelect = document.getElementById('taskFilterStaffSelect');
        var statusSelect = document.getElementById('taskFilterStatusSelect');
        appState.ui.taskFilterStaff = staffSelect ? staffSelect.value : 'all';
        appState.ui.taskFilterStatus = statusSelect ? statusSelect.value : 'all';
        appState.ui.taskPage = 1;
        UIRenderer.renderTaskTable(appState.filteredTasks);
    },

    _readFilters: function() {
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

    _applyFilters: function() {
        var filters = appState.filters;
        appState.filteredTickets = FilterEngine.applyTicketFilters(appState.tickets, filters);
        appState.filteredTasks = FilterEngine.applyTaskFilters(appState.tasks, filters);

        var totalPages = Utils.Array.totalPages(appState.filteredTasks, CONFIG.PAGINATION.pageSize);
        if (appState.ui.taskPage > totalPages) appState.ui.taskPage = totalPages || 1;
    },

    _refreshData: function() {
        var self = this;
        UIRenderer.updateSyncStatus('syncing', null);

        DataLoader.load().then(function(success) {
            if (success) {
                UIRenderer.updateSyncStatus('live', appState.meta.lastSync);
            } else if (window.location.protocol === 'file:') {
                UIRenderer.updateSyncStatus('fileproto', null);
            } else {
                UIRenderer.updateSyncStatus('error', null);
            }

            self._applyFilters();
            self.refreshUI();
            if (appState.ui.currentMenu === 'mtm') UIRenderer.renderMTM();
        });
    },

    refreshUI: function() {
        var tickets = appState.filteredTickets;
        var tasks = appState.filteredTasks;
        var filters = appState.filters;

        UIRenderer.populateDynamicFilters(appState.tickets, appState.tasks);

        var prevTicketData = DataProcessor.getPreviousPeriodData(appState.tickets, filters);
        var filterSummary = FilterEngine.getFilterSummary(filters);

        UIRenderer.renderKPI(tickets, prevTicketData, filterSummary);
        UIRenderer.renderEscalation(tickets);
        UIRenderer.renderCharts(tickets);
        UIRenderer.renderTaskSection(appState.tasks, filters);

        this.validateFilters();
    },

    _applyWeekDependency: function(monthSelect, weekSelect) {
        var monthSelected = monthSelect.value !== 'all';
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

    validateFilters: function() {
        var monthSelect = document.getElementById('filterMonth');
        var weekSelect = document.getElementById('filterWeek');
        var dateFromInput = document.getElementById('filterDateFrom');
        var dateToInput = document.getElementById('filterDateTo');
        if (!monthSelect || !weekSelect || !dateFromInput || !dateToInput) return;

        var month = monthSelect.value || 'all';
        var week = weekSelect.value || 'all';
        var isPeriodSelected = (month !== 'all' || week !== 'all');

        if (isPeriodSelected) {
            var range = getDateRangeFromFilters(appState.tickets, month, week);
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

            var dateFrom = dateFromInput.value || '';
            var dateTo = dateToInput.value || '';
            var isDateRangeSelected = (dateFrom !== '' || dateTo !== '');

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
    var filtered = tickets;

    if (month !== 'all') {
        filtered = filtered.filter(function(r) { return r.month === month; });
    }
    if (week !== 'all') {
        filtered = filtered.filter(function(r) { return r.week === week; });
    }

    if (filtered.length === 0) {
        return { from: '', to: '' };
    }

    var dates = filtered.map(function(r) { return Utils.Date.parseDate(r.date); }).filter(function(d) { return d && !isNaN(d); });
    if (dates.length === 0) {
        return { from: '', to: '' };
    }

    dates.sort(function(a, b) { return a - b; });

    var fromDate = dates[0];
    var toDate = dates[dates.length - 1];

    var formatDate = function(d) {
        var dd = String(d.getDate()).padStart(2, '0');
        var mm = String(d.getMonth() + 1).padStart(2, '0');
        var yyyy = d.getFullYear();
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

var LoadingOverlay = {
    _timer: null,
    _rushTimer: null,
    _current: 0,
    _target: 0,
    _finished: false,

    start: function() {
        var overlay = document.getElementById('appLoadingOverlay');
        if (!overlay) return;

        this._current = 0;
        this._target = 0;
        this._finished = false;

        overlay.style.display = 'flex';
        overlay.classList.remove('is-hidden');

        var labelEl = document.getElementById('appLoadingLabel');
        if (labelEl) labelEl.textContent = t('loadingLabel');
        this._render();

        var self = this;
        clearInterval(this._timer);
        this._timer = setInterval(function() {
            if (self._target < 90) {
                self._target = Math.min(90, self._target + (Math.random() * 4 + 1));
            }
            if (self._current < self._target) {
                self._current += 1;
                self._render();
            }
        }, 100);
    },

    _render: function() {
        var countEl = document.getElementById('appLoadingCount');
        var barEl = document.getElementById('appLoadingBarFill');
        var val = Math.min(100, Math.round(this._current));
        if (countEl) countEl.textContent = val;
        if (barEl) barEl.style.width = val + '%';
    },

    finish: function() {
        if (this._finished) return;
        this._finished = true;

        var overlay = document.getElementById('appLoadingOverlay');
        if (!overlay) {
            clearInterval(this._timer);
            return;
        }

        var self = this;
        clearInterval(this._rushTimer);
        this._rushTimer = setInterval(function() {
            self._current += 3;
            if (self._current >= 100) {
                self._current = 100;
                self._render();
                clearInterval(self._rushTimer);
                clearInterval(self._timer);

                setTimeout(function() {
                    overlay.classList.add('is-hidden');
                    setTimeout(function() { overlay.style.display = 'none'; }, 400);
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

var Auth = {

    isAuthenticated: function() {
        return sessionStorage.getItem(CONFIG.AUTH.sessionKey) === '1';
    },

    login: function(username, password) {
        if (username === CONFIG.AUTH.username && password === CONFIG.AUTH.password) {
            sessionStorage.setItem(CONFIG.AUTH.sessionKey, '1');
            return true;
        }
        return false;
    },

    logout: function() {
        sessionStorage.removeItem(CONFIG.AUTH.sessionKey);
        location.reload();
    },

    hideLoginScreen: function() {
        var el = document.getElementById('loginScreen');
        if (el) el.classList.add('is-hidden');
    },

    showLoginScreen: function() {
        var el = document.getElementById('loginScreen');
        if (el) el.classList.remove('is-hidden');
    },

    init: function() {
        var form = document.getElementById('loginForm');
        var errorEl = document.getElementById('loginError');
        if (!form) return;

        var self = this;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var username = document.getElementById('loginUsername').value.trim();
            var password = document.getElementById('loginPassword').value;

            if (self.login(username, password)) {
                if (errorEl) errorEl.textContent = '';
                self.hideLoginScreen();
                App.init();
            } else {
                if (errorEl) errorEl.textContent = t('loginErrorInvalid');
            }
        });

        document.getElementById('btnLogout')?.addEventListener('click', function() { self.logout(); });
    },
};

/* ================================================================
   APPLICATION INITIALIZATION
   ================================================================ */

var App = {

    init: function() {
        var self = this;
        LoadingOverlay.start();

        DataLoader.load().then(function(success) {
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

            setInterval(function() {
                EventHandlers.onRefresh();
            }, CONFIG.APP.refreshInterval);

            console.log(CONFIG.APP.name + ' v' + CONFIG.APP.version + ' initialized');
            console.log('Data source: ' + appState.meta.dataSource);
            console.log('Tickets: ' + appState.tickets.length + ', Tasks: ' + appState.tasks.length);
        });
    },

    _setDefaultMonthFilter: function() {
        var monthSelect = document.getElementById('filterMonth');
        if (!monthSelect) return;
        var now = new Date();
        var candidates = [
            now.toLocaleDateString('en-US', { month: 'long' }),
            now.toLocaleDateString('id-ID', { month: 'long' }),
        ].map(function(s) { return s.trim().toLowerCase(); });
        var match = null;
        for (var i = 0; i < monthSelect.options.length; i++) {
            var opt = monthSelect.options[i];
            if (opt.value === 'all') continue;
            var clean = opt.value.replace(/\[\d+\]\s*/, '').trim().toLowerCase();
            if (candidates.indexOf(clean) !== -1) {
                match = opt;
                break;
            }
        }
        if (match) monthSelect.value = match.value;
    },
};

/* ================================================================
   BOOT
   ================================================================ */

document.addEventListener('DOMContentLoaded', function() {
    Auth.init();
    EventHandlers.applyStaticTranslations();

    if (Auth.isAuthenticated()) {
        Auth.hideLoginScreen();
        App.init();
    } else {
        Auth.showLoginScreen();
    }
});