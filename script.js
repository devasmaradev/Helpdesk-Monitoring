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
        subPercent: '% dari total',
        subForwarded: 'Diteruskan ke tim lain',
        subAHT: 'Rata-rata waktu merespon',
        subART: 'Rata-rata waktu dari mulai ditangani hingga selesai',
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
        thTask: 'Task',
        thTag: 'Tag',
        thEscalatedto: 'Eskalasi ke',
        thStatus: 'Status',
        thDate: 'Tanggal',
        menuTicket: 'Ticket',
        menuTask: 'Task',
        days: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
        footer: 'Helpdesk Monitoring Dashboard · Data: Google Sheets · Jan 2026',
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
        totalWorkHours: 'Total Jam Kerja',
        totalTasks: 'Total Task',
        inProgress: 'Sedang dikerjakan',
        completed: 'selesai',
        activeStaff: 'staff aktif',
        avgResponseTime: 'ART',
        loadingLabel: 'Memuat data...',
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
        subPercent: '% of total',
        subForwarded: 'Forwarded to another team',
        subAHT: 'Avg response time',
        subART: 'Avg time from start to resolution',
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
        thTask: 'Task',
        thTag: 'Tag',
        thEscalatedto: 'Escalated to',
        thStatus: 'Status',
        thDate: 'Date',
        menuTicket: 'Ticket',
        menuTask: 'Task',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        footer: 'Helpdesk Monitoring Dashboard · Data: Google Sheets · Jan 2026',
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
        totalWorkHours: 'Total Work Hours',
        totalTasks: 'Total Tasks',
        inProgress: 'In progress',
        completed: 'completed',
        activeStaff: 'active staff',
        avgResponseTime: 'ART',
        loadingLabel: 'Loading data...',
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

    /** Date utilities */
    Date: {
        /** Parse DD/MM/YYYY to Date object */
        parseDate: (str) => {
            if (!str) return null;
            const parts = str.split('/').map(Number);
            return new Date(parts[2], parts[1] - 1, parts[0]);
        },

        /** Parse YYYY-MM-DD to Date object */
        parseDateInput: (str) => {
            if (!str) return null;
            const parts = str.split('-').map(Number);
            return new Date(parts[0], parts[1] - 1, parts[2]);
        },

        /** Get calendar date/time parts of an ISO datetime string, in Asia/Jakarta timezone */
        toJakartaParts: (isoStr) => {
            if (!isoStr) return null;
            const d = new Date(isoStr);
            if (isNaN(d.getTime())) return null;
            const fmt = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Jakarta',
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
            });
            const parts = fmt.formatToParts(d).reduce((acc, p) => { acc[p.type] = p.value; return acc; }, {});
            return {
                year: Number(parts.year),
                month: Number(parts.month),
                day: Number(parts.day),
                hour: Number(parts.hour === '24' ? '0' : parts.hour),
                minute: Number(parts.minute),
                second: Number(parts.second),
            };
        },

        /** Convert ISO datetime string (Ticket Date) to "DD/MM/YYYY" using its Asia/Jakarta calendar date */
        isoToDDMMYYYY: (isoStr) => {
            const p = Utils.Date.toJakartaParts(isoStr);
            if (!p) return '';
            return `${String(p.day).padStart(2, '0')}/${String(p.month).padStart(2, '0')}/${p.year}`;
        },

        /** Convert ISO datetime string (Task Start Time) to "DD-Mon-YYYY HH:MM:SS" so existing task-date utilities keep working unchanged */
        isoToTaskDateString: (isoStr) => {
            const p = Utils.Date.toJakartaParts(isoStr);
            if (!p) return '';
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const dd = String(p.day).padStart(2, '0');
            const hh = String(p.hour).padStart(2, '0');
            const mi = String(p.minute).padStart(2, '0');
            const ss = String(p.second).padStart(2, '0');
            return `${dd}-${monthNames[p.month - 1]}-${p.year} ${hh}:${mi}:${ss}`;
        },

        /** Parse task date format "DD-Mon-YYYY HH:MM:SS" to Date */
        parseTaskDate: (str) => {
            if (!str) return null;
            const [datePart, timePart] = str.split(' ');
            const [d, mon, y] = datePart.split('-');
            const [hh, mm, ss] = (timePart || '0:0:0').split(':').map(Number);
            const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return new Date(Number(y), monthMap[mon], Number(d), hh || 0, mm || 0, ss || 0);
        },

        /** Get date only from task date string */
        taskDateOnly: (str) => {
            const dt = Utils.Date.parseTaskDate(str);
            return dt ? new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()) : null;
        },

        /** Format time as HH:MM */
        formatTime: (date) => {
            if (!date) return '';
            const h = String(date.getHours()).padStart(2, '0');
            const m = String(date.getMinutes()).padStart(2, '0');
            return `${h}:${m}`;
        },

        /** Format task date from "DD-Mon-YYYY" to "DD/MM/YYYY" */
        formatTaskDate: (str) => {
            if (!str) return '';
            const parts = str.split(' ');
            const datePart = parts[0] || '';
            if (!datePart) return '';
            const [d, mon, y] = datePart.split('-');
            const monthMap = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', 
                            Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
            const monthNum = monthMap[mon] || mon;
            const day = String(Number(d)).padStart(2, '0');
            return `${day}/${monthNum}/${y}`;
        },
    },

    /** String utilities */
    String: {
        truncate: (str, maxLen) => {
            if (!str || str.length <= maxLen) return str || '';
            return str.slice(0, maxLen) + '…';
        },

        getInitials: (name) => {
            if (!name) return '?';
            return name.split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map(w => w[0])
                .join('')
                .toUpperCase();
        },

        capitalize: (str) => {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        },

        /** Escape karakter HTML berbahaya sebelum di-inject ke innerHTML */
        escapeHtml: (str) => {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        },

        /** Format "Tier1" -> "Tier 1" for display only */
        formatTier: (tier) => {
            if (!tier) return '';
            return tier.replace(/^Tier(\d+)$/, 'Tier $1');
        },

        /** Strip spreadsheet epoch placeholder artifacts (e.g. blank time cells showing 1899/1900) */
        sanitizePlaceholderDate: (str) => {
            if (!str) return '';
            return /1899|1900/.test(str) ? '' : str;
        },
    },

    /** Math utilities */
    Math: {
        sum: (arr) => arr.reduce((a, b) => a + b, 0),
        average: (arr) => arr.length ? Utils.Math.sum(arr) / arr.length : 0,
        percentage: (part, total) => total > 0 ? (part / total) * 100 : 0,
        clamp: (val, min, max) => Math.min(Math.max(val, min), max),
        round: (val, decimals) => Number(val.toFixed(decimals)),
    },

    /** Array utilities */
    Array: {
        distinct: (arr) => [...new Set(arr)],
        groupBy: (arr, key) => {
            return arr.reduce((acc, item) => {
                const k = item[key] || 'unknown';
                if (!acc[k]) acc[k] = [];
                acc[k].push(item);
                return acc;
            }, {});
        },
        sortBy: (arr, key, asc = true) => {
            return [...arr].sort((a, b) => {
                const va = a[key] || '';
                const vb = b[key] || '';
                return asc ? va.localeCompare(vb) : vb.localeCompare(va);
            });
        },
        paginate: (arr, page, size) => {
            const start = (page - 1) * size;
            return arr.slice(start, start + size);
        },
        totalPages: (arr, size) => Math.max(1, Math.ceil(arr.length / size)),
    },

    /** Duration utilities */
    Duration: {
        parse: (str) => {
            if (!str) return 0;
            // Handle full ISO datetime strings from the sheet (time-only cells serialize with an epoch date)
            const isoMatch = str.match(/T(\d{1,2}):(\d{2}):(\d{2})/);
            const timePart = isoMatch ? `${isoMatch[1]}:${isoMatch[2]}:${isoMatch[3]}` : str;
            const parts = timePart.split(':').map(Number);
            if (parts.some(isNaN)) return 0;
            return parts[0] * 60 + parts[1] + (parts[2] || 0) / 60;
        },

        /** Parse a time-like string (plain "HH:MM:SS" or ISO datetime) to total seconds. Returns null if invalid. */
        parseTimeToSeconds: (str) => {
            if (!str) return null;
            const isoMatch = str.match(/T(\d{1,2}):(\d{2}):(\d{2})/);
            const timePart = isoMatch ? `${isoMatch[1]}:${isoMatch[2]}:${isoMatch[3]}` : str;
            const parts = timePart.split(':').map(Number);
            if (parts.length < 2 || parts.some(isNaN)) return null;
            return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
        },

        format: (minutes) => {
            if (minutes < 60) return `${minutes.toFixed(1)}m`;
            return `${(minutes / 60).toFixed(1)}h`;
        },

        /** Format total minutes into "H:MM:SS" — jam tidak dibatasi 24 (mengikuti gaya [hh]:mm:ss) */
        formatHMS: (totalMinutes) => {
            const totalSeconds = Math.round((totalMinutes || 0) * 60);
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        },

        sum: (items, key) => {
            return items.reduce((acc, item) => acc + Utils.Duration.parse(item[key] || ''), 0);
        },
    },

    /** Color utilities */
    Color: {
        toRGBA: (hex, alpha) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r},${g},${b},${alpha})`;
        },
    },

    /** DOM utilities */
    DOM: {
        get: (id) => document.getElementById(id),
        qs: (sel, ctx) => (ctx || document).querySelector(sel),
        qsa: (sel, ctx) => (ctx || document).querySelectorAll(sel),
        create: (tag, cls, html) => {
            const el = document.createElement(tag);
            if (cls) el.className = cls;
            if (html) el.innerHTML = html;
            return el;
        },
    },

    /** Debounce function */
    debounce: (fn, delay) => {
        let timer = null;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    },

    /** Generate unique ID */
    uid: () => Date.now().toString(36) + Math.random().toString(36).slice(2),
};

/* ================================================================
   TRANSLATION
   ================================================================ */

/** Get translated text */
function t(key, params) {
    const lang = appState.ui.language;
    const translations = LOCALE[lang] || LOCALE.id;
    let text = translations[key] || key;

    if (params) {
        Object.keys(params).forEach((k) => {
            text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), params[k]);
        });
    }

    return text;
}

/** Get current language */
function getLang() {
    return appState.ui.language;
}

/* ================================================================
   THEME
   ================================================================ */

/** Get current theme */
function getTheme() {
    return appState.ui.theme;
}

/** Toggle between light/dark theme */
function toggleTheme() {
    const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
    appState.ui.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById('btnTheme').textContent = newTheme === 'dark' ? '🌙' : '☀️';
    return newTheme;
}

/** Check if dark theme is active */
function isDark() {
    return getTheme() === 'dark';
}

/** Get grid color based on theme */
function getGridColor() {
    return isDark() ? 'rgba(36,40,64,.9)' : 'rgba(226,232,240,.9)';
}

/** Get tick color based on theme */
function getTickColor() {
    return isDark() ? '#475569' : '#94a3b8';
}

/** Get text color based on theme */
function getTextColor() {
    return isDark() ? '#e2e8f0' : '#0f172a';
}

/** Get surface color based on theme */
function getSurfaceColor() {
    return isDark() ? '#111318' : '#ffffff';
}

/* ================================================================
   DATA LOADER
   ================================================================ */

const DataLoader = {

    /**
     * Fetch JSON data from the API endpoint with cache busting
     * API shape: { success: boolean, total: number, data: [ {..record}, ... ] }
     */
    async fetchJSON(url) {
        const bust = (url.includes('?') ? '&' : '?') + '_t=' + Date.now();
        const response = await fetch(url + bust, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        if (!json || json.success === false || !Array.isArray(json.data)) {
            throw new Error('Invalid API response shape');
        }
        return json.data;
    },

    /**
     * Get a field value from a record object, matching by name loosely
     * (case-insensitive, ignoring spaces/punctuation) so header text
     * variations in the sheet ("On SLA?", "Client Category", etc.) still resolve.
     */
    getField(obj, ...names) {
        const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
        for (const n of names) {
            if (obj[n] !== undefined && obj[n] !== null && obj[n] !== '') {
                return String(obj[n]).trim();
            }
        }
        const keys = Object.keys(obj);
        for (const n of names) {
            const target = normalize(n);
            const found = keys.find(k => normalize(k) === target);
            if (found && obj[found] !== undefined && obj[found] !== null && obj[found] !== '') {
                return String(obj[found]).trim();
            }
        }
        return '';
    },

    /**
     * Map ticket records (from JSON API) to structured objects
     */
    mapTicketRows(records) {
        const out = [];
        (records || []).forEach(rec => {
            const rawDate = this.getField(rec, 'Ticket Date', 'Date');
            if (!rawDate) return;

            out.push({
                date: Utils.Date.isoToDDMMYYYY(rawDate),
                day: this.getField(rec, 'Day'),
                month: this.getField(rec, 'Month'),
                week: this.getField(rec, 'Week'),
                product: this.getField(rec, 'Product'),
                type: this.getField(rec, 'Type'),
                esc: this.normalizeYesNo(this.getField(rec, 'Escalation Status', 'Escalation')),
                status: this.getField(rec, 'Status'),
                priority: this.getField(rec, 'Priority'),
                feature: this.getField(rec, 'Feature'),
                shift: this.getField(rec, 'Shift'),
                tier: this.getField(rec, 'Client Category', 'Tier'),
                onSLA: this.normalizeYesNo(this.getField(rec, 'On SLA?', 'On SLA', 'OnSLA')),
                ht: this.getField(rec, 'Handling Time'),
                client: this.getField(rec, 'Client Name'),
                problem: this.getField(rec, 'Problem'),
                startTime: this.getField(rec, 'Start Time'),
                solvedTime: this.getField(rec, 'Solved/Escalated Time', 'Solved Time'),
                staff: this.getField(rec, 'Created by', 'Staff'),
                escalatedTo: this.getField(rec, 'Escalated to'),
            });
        });
        return out;
    },

    /**
     * Map task records (from JSON API) to structured objects
     */
    mapTaskRows(records) {
        const out = [];
        (records || []).forEach(rec => {
            const staff = this.getField(rec, 'Staff Member', 'Staff');
            const task = this.getField(rec, 'Task');
            if (!staff && !task) return;

            const rawStart = this.getField(rec, 'Start Time');

            out.push({
                staff: staff,
                task: task,
                month: this.getField(rec, 'Month'),
                week: this.getField(rec, 'Week'),
                start: Utils.Date.isoToTaskDateString(rawStart), // drives both date filter & table "Date" column
                end: this.getField(rec, 'End Time'),
                note: this.getField(rec, 'Note'),
                duration: this.getField(rec, 'Duration'),
                status: this.getField(rec, 'Status'),
            });
        });
        return out;
    },

    /**
     * Normalize yes/no-like values (strips spaces so "On SLA" / "Off SLA" match correctly)
     */
    normalizeYesNo(value) {
        const s = (value || '').trim().toLowerCase().replace(/\s+/g, '');
        if (['yes', 'y', 'onsla', 'true', '1', 'escalated'].includes(s)) return 'Yes';
        if (['no', 'n', 'offsla', 'false', '0'].includes(s)) return 'No';
        return value || '';
    },

    /**
     * Load data from API endpoints
     */
    async load() {
        // Skip if file protocol
        if (window.location.protocol === 'file:') {
            console.warn('File protocol detected, cannot fetch data');
            appState.tickets = [];
            appState.tasks = [];
            appState.meta.dataSource = 'error';
            appState.meta.lastSync = new Date();
            return false;
        }

        try {
            const [ticketRecords, taskRecords] = await Promise.all([
                this.fetchJSON(CONFIG.API.tickets),
                this.fetchJSON(CONFIG.API.tasks),
            ]);

            const mappedTickets = this.mapTicketRows(ticketRecords);
            const mappedTasks = this.mapTaskRows(taskRecords);

            if (mappedTickets.length === 0 && mappedTasks.length === 0) {
                throw new Error('Empty dataset from API');
            }

            appState.tickets = mappedTickets;
            appState.tasks = mappedTasks;
            appState.meta.dataSource = 'live';
            appState.meta.lastSync = new Date();
            return true;

        } catch (err) {
            console.error('Failed to load data from API:', err);
            appState.tickets = [];
            appState.tasks = [];
            appState.meta.dataSource = 'error';
            appState.meta.lastSync = new Date();
            return false;
        }
    }
};

/* ================================================================
   DATA PROCESSOR
   ================================================================ */

const DataProcessor = {

    /**
     * Calculate KPI metrics from ticket data
     */
    calculateKPIs(data) {
        const total = data.length;
        const closed = data.filter(r => r.status === 'Closed').length;
        const issue = data.filter(r => r.type === 'Issue').length;
        const nonIssue = data.filter(r => r.type === 'Non Issue').length;
        const activeEsc = data.filter(r => r.esc === 'Yes' && r.status !== 'Closed').length;
        const onSLA = data.filter(r => r.onSLA === 'Yes').length;
        const slaRate = total > 0 ? Math.round((onSLA / total) * 100) : 0;

        const htEntries = data.filter(r => r.ht);
        const totalMinutes = htEntries.reduce((acc, r) => acc + Utils.Duration.parse(r.ht), 0);
        const aht = htEntries.length > 0 ? totalMinutes / htEntries.length : 0;

        return { total, closed, issue, nonIssue, activeEsc, slaRate, aht };
    },

    /**
     * Calculate escalation statistics
     */
    calculateEscalationStats(data) {
        const esc = data.filter(r => r.esc === 'Yes');
        const total = esc.length;
        const active = esc.filter(r => r.status !== 'Closed').length;
        const closed = esc.filter(r => r.status === 'Closed').length;
        const rate = data.length > 0 ? (total / data.length) * 100 : 0;

        // By product
        const products = [...new Set(data.map(r => r.product))].sort();
        const byProduct = products
            .map(p => ({
                name: p,
                label: p.replace('Sociomile ', 'SM '),
                total: esc.filter(r => r.product === p).length,
                active: esc.filter(r => r.product === p && r.status !== 'Closed').length,
            }))
            .filter(x => x.total > 0);

        // By tier
        const tierSet = [...new Set(data.map(r => r.tier))].filter(Boolean).sort();
        const palette = ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        const byTier = tierSet
            .map((t, i) => ({
                name: t,
                label: t,
                total: esc.filter(r => r.tier === t).length,
                active: esc.filter(r => r.tier === t && r.status !== 'Closed').length,
                color: CONFIG.CHART.colors[t] || palette[i % palette.length],
            }))
            .filter(x => x.total > 0);

        // By type
        const byType = [
            { name: t('issue'), key: 'Issue', total: esc.filter(r => r.type === 'Issue').length, active: esc.filter(r => r.type === 'Issue' && r.status !== 'Closed').length, color: CONFIG.CHART.colors.issue },
            { name: t('nonIssue'), key: 'Non Issue', total: esc.filter(r => r.type === 'Non Issue').length, active: esc.filter(r => r.type === 'Non Issue' && r.status !== 'Closed').length, color: CONFIG.CHART.colors.non },
        ].filter(x => x.total > 0);

        // Active escalation rows
        const activeRows = active > 0 ? esc
            .filter(r => r.status !== 'Closed')
            .map((r) => {
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

    /**
     * Calculate task metrics
     */
    calculateTaskMetrics(data) {
        const total = data.length;
        const done = data.filter(t => t.status === 'Done').length;
        const progress = data.filter(t => t.status === 'Progress').length;
        const totalMinutes = data.reduce((acc, t) => acc + Utils.Duration.parse(t.duration), 0);
        const staffCount = new Set(data.map(t => t.staff)).size;
        return { total, done, progress, totalMinutes, staffCount };
    },

    /**
     * Get previous period data for comparison
     */
    getPreviousPeriodData(data, filters) {
        const { month, week, dateFrom, dateTo, product, tier, shift, staff } = filters;
        const applyDim = (rows) => rows.filter(r =>
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
                const dates = [...new Set(data.map(r => r.date))].map(Utils.Date.parseDate).filter(Boolean).sort((a, b) => a - b);
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

        const dates = [...new Set(data.map(r => r.date))].sort((a, b) => Utils.Date.parseDate(a) - Utils.Date.parseDate(b));
        if (dates.length < 2) return [];
        const half = Math.ceil(dates.length / 2);
        const prevSet = new Set(dates.slice(0, half));
        return applyDim(data.filter(r => prevSet.has(r.date)));
    },

    /**
     * Prepare priority distribution data
     */
    preparePriorityData(data) {
        const labels = CONFIG.PRIORITIES;
        const values = labels.map(p => data.filter(r => r.priority === p).length);
        const colors = labels.map(p => CONFIG.CHART.colors[p]);
        return { labels, values, colors };
    },

    /**
     * Prepare tier distribution data
     */
    prepareTierData(data) {
        const tiers = [...new Set(data.map(r => r.tier))].filter(Boolean).sort();
        if (tiers.length === 0) {
            return { labels: [], rawTiers: [], issue: [], nonIssue: [], totals: [] };
        }

        const labels = tiers.map(t => Utils.String.formatTier(t));
        const issue = tiers.map(t => data.filter(r => r.tier === t && r.type === 'Issue').length);
        const nonIssue = tiers.map(t => data.filter(r => r.tier === t && r.type === 'Non Issue').length);
        const totals = tiers.map(t => data.filter(r => r.tier === t).length);

        return { labels, rawTiers: tiers, issue, nonIssue, totals };
    },

    /**
     * Prepare product distribution data
     */
    prepareProductData(data) {
        const products = [...new Set(data.map(r => r.product))].sort();
        const labels = products.map(p => p.replace('Sociomile ', 'SM '));
        const issue = products.map(p => data.filter(r => r.product === p && r.type === 'Issue').length);
        const nonIssue = products.map(p => data.filter(r => r.product === p && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    /**
     * Prepare feature distribution data
     */
    prepareFeatureData(data) {
        const features = [...new Set(data.map(r => r.feature || 'Lainnya'))];
        const labels = features;
        const issue = features.map(f => data.filter(r => (r.feature || 'Lainnya') === f && r.type === 'Issue').length);
        const nonIssue = features.map(f => data.filter(r => (r.feature || 'Lainnya') === f && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    /**
     * Prepare staff workload data
     */
    prepareStaffData(data) {
        const unassignedLabel = t('unassigned');
        const staffs = [...new Set(data.map(r => r.staff || unassignedLabel))].sort();
        const counts = staffs.map(s => data.filter(r => (r.staff || unassignedLabel) === s).length);
        const combined = staffs.map((s, i) => ({ label: s, count: counts[i] }))
            .filter(x => x.count > 0)
            .sort((a, b) => b.count - a.count);
        return {
            labels: combined.map(x => x.label.split(' ').slice(0, 2).join(' ')),
            values: combined.map(x => x.count),
        };
    },

    /**
     * Prepare 7-day trend data
     */
    prepareTrendData(data) {
        const allDates = [...new Set(data.map(r => r.date))].sort((a, b) => Utils.Date.parseDate(a) - Utils.Date.parseDate(b));
        const last7 = allDates.slice(-7);
        const days = t('days');
        const labels = last7.map(dt => {
            const [dd, mm, yy] = dt.split('/').map(Number);
            const dayName = days[new Date(yy, mm - 1, dd).getDay()];
            return `${dayName} ${dd}/${String(mm).padStart(2, '0')}`;
        });
        const issue = last7.map(dt => data.filter(r => r.date === dt && r.type === 'Issue').length);
        const nonIssue = last7.map(dt => data.filter(r => r.date === dt && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    /**
     * Prepare shift distribution data
     */
    prepareShiftData(data) {
        const shifts = ['Pagi', 'Siang', 'Malam'];
        const labels = [t('morning'), t('day'), t('night')];
        const issue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Issue').length);
        const nonIssue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Non Issue').length);
        const totals = shifts.map(s => data.filter(r => r.shift === s).length);
        return { labels, issue, nonIssue, totals };
    },

    /**
     * Get unique staff list from data
     */
    getStaffList(data) {
        return [...new Set(data.map(r => r.staff).filter(Boolean))].sort();
    },

    /**
     * Calculate average response time
     */
    calculateAverageResponseTime(data) {
        let totalSeconds = 0;
        let count = 0;

        data.forEach(r => {
            const start = Utils.Duration.parseTimeToSeconds(r.startTime);
            const solved = Utils.Duration.parseTimeToSeconds(r.solvedTime);
            if (start === null || solved === null) return;

            let diff = solved - start;
            if (diff < 0) diff += 24 * 3600; // handle case crossing midnight
            totalSeconds += diff;
            count++;
        });

        const avgSeconds = count > 0 ? totalSeconds / count : 0;
        const minutes = Math.floor(avgSeconds / 60);
        const seconds = Math.round(avgSeconds % 60);

        return {
            avgSeconds: avgSeconds,
            formatted: minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`,
            count: count,
            totalSeconds: totalSeconds
        };
    },
};

/* ================================================================
   FILTER ENGINE
   ================================================================ */

const FilterEngine = {

    /**
     * Apply ticket filters to data
     */
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

    /**
     * Apply task filters to data
     */
    applyTaskFilters(data, filters) {
        const { month, week, dateFrom, dateTo } = filters;

        return data.filter(t => {
            if (month !== 'all' && t.month !== month) return false;
            if (week !== 'all' && t.week !== week) return false;

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

    /**
     * Get previous task data for comparison
     */
    getPreviousTaskData(data, filters) {
        const { month, week, dateFrom, dateTo } = filters;

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

            return data.filter(t => {
                const td = Utils.Date.taskDateOnly(t.start);
                return td && td >= prevFrom && td <= prevTo;
            });
        }

        if (week !== 'all') {
            const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
            const idx = weeks.indexOf(week);
            const prevWeek = idx > 0 ? weeks[idx - 1] : null;
            if (!prevWeek) return [];
            return data.filter(t => t.week === prevWeek && (month === 'all' || t.month === month));
        }

        const dates = data.map(t => t.start).sort((a, b) => Utils.Date.parseTaskDate(a) - Utils.Date.parseTaskDate(b));
        if (dates.length < 2) return [];
        const half = Math.ceil(dates.length / 2);
        const prevSet = new Set(dates.slice(0, half));
        return data.filter(t => prevSet.has(t.start));
    },

    /**
     * Get human-readable filter summary
     */
    getFilterSummary(filters) {
        const parts = [];
        if (filters.month !== 'all') {
            parts.push(filters.month.replace(/\[\d+\]\s*/, ''));
        }
        if (filters.week !== 'all') parts.push(filters.week);
        if (filters.dateFrom && filters.dateTo) parts.push(`${filters.dateFrom} – ${filters.dateTo}`);
        else if (filters.dateFrom) parts.push(`≥ ${filters.dateFrom}`);
        else if (filters.dateTo) parts.push(`≤ ${filters.dateTo}`);
        return parts.length ? parts.join(' · ') : t('allData');
    },
};

/* ================================================================
   CHART ENGINE
   ================================================================ */

const ChartEngine = {

    /** Chart instances cache */
    _charts: {},

    /**
     * Destroy chart by key
     */
    destroy(key) {
        if (this._charts[key]) {
            this._charts[key].destroy();
            delete this._charts[key];
        }
    },

    /**
     * Destroy all charts
     */
    destroyAll() {
        Object.keys(this._charts).forEach(key => this.destroy(key));
    },

    /**
     * Create doughnut chart
     */
    createDoughnut(canvasId, labels, data, colors, cutout = CONFIG.CHART.cutout) {
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
                                label: (c) => {
                                    const total = data.reduce((a, b) => a + b, 0);
                                    const pct = total > 0 ? Math.round((c.parsed / total) * 100) : 0;
                                    return `${c.label}: ${c.parsed} (${pct}%)`;
                                }
                            }
                        }
                    }
                },
                plugins: [this._plugins.doughnutCenter],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn(`Failed to create doughnut chart ${canvasId}:`, e);
            return null;
        }
    },

    /**
     * Create stacked bar chart
     */
    createStackedBar(canvasId, labels, datasets, isHorizontal = false) {
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
                plugins: isHorizontal ? [this._plugins.horizontalEnd] : [this._plugins.stackTop],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn(`Failed to create stacked bar chart ${canvasId}:`, e);
            return null;
        }
    },

    /**
     * Create single bar chart
     */
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
                plugins: [this._plugins.singleBarLabel],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn(`Failed to create single bar chart ${canvasId}:`, e);
            return null;
        }
    },

    /**
     * Create line chart
     */
    createLine(canvasId, labels, datasets) {
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
                pointRadius: 5,
                pointHoverRadius: 8,
                pointBackgroundColor: ds.color,
                borderWidth: 2,
            }));

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
                            callbacks: {
                                footer: (items) => `Total: ${items.reduce((a, i) => a + i.parsed.y, 0)}`,
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
                plugins: [this._plugins.lineLabel],
            });

            this._charts[canvasId] = chart;
            return chart;
        } catch (e) {
            console.warn(`Failed to create line chart ${canvasId}:`, e);
            return null;
        }
    },

    /** Chart plugins */
    _plugins: {

        /** Center label for doughnut charts */
        doughnutCenter: {
            id: 'doughnutCenter',
            afterDraw(chart) {
                if (chart.config.type !== 'doughnut') return;
                const { ctx, chartArea: { left, right, top, bottom } } = chart;
                const cx = (left + right) / 2,
                    cy = (top + bottom) / 2;
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
                        ctx.fillText(`${pct}%`, lx, ly + 7);
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

        /** Top label for stacked bars */
        stackTop: {
            id: 'stackTop',
            afterDatasetsDraw(chart) {
                const { ctx, data } = chart;
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
                    let total = 0,
                        topY = Infinity;
                    for (let di = 0; di < nds; di++) {
                        const meta = chart.getDatasetMeta(di);
                        if (meta.hidden) continue;
                        const bar = meta.data[i];
                        if (!bar) continue;
                        total += (data.datasets[di].data[i] || 0);
                        topY = Math.min(topY, bar.y);
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

        /** End label for horizontal bars */
        horizontalEnd: {
            id: 'horizontalEnd',
            afterDatasetsDraw(chart) {
                const { ctx, data } = chart;
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
                    let total = 0,
                        rx = 0;
                    for (let di = 0; di < nds; di++) {
                        const meta = chart.getDatasetMeta(di);
                        if (meta.hidden) continue;
                        const bar = meta.data[i];
                        if (!bar) continue;
                        total += (data.datasets[di].data[i] || 0);
                        rx = Math.max(rx, bar.x);
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

        /** Label for single bar charts */
        singleBarLabel: {
            id: 'singleBarLabel',
            afterDatasetsDraw(chart) {
                const { ctx, data } = chart;
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

        /** Label for line charts */
        lineLabel: {
            id: 'lineLabel',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets.forEach((ds, di) => {
                    const meta = chart.getDatasetMeta(di);
                    if (meta.hidden) return;
                    meta.data.forEach((pt, i) => {
                        const val = ds.data[i];
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

    /**
     * Update chart data
     */
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

    /**
     * Render KPI cards
     */
    renderKPI(data, prevData, filterSummary) {
        const grid = document.getElementById('kpiGrid');
        if (!grid) return;

        const cur = DataProcessor.calculateKPIs(data);
        const prev = prevData ? DataProcessor.calculateKPIs(prevData) : null;
        const prevLabel = this._getPrevLabel();
        const hasPrev = prev !== null;

        // ART (Average Response Time) belum tersedia datanya di sheet — sengaja dikosongkan

        const ahtStr = (v) => v < 60 ? `${v.toFixed(1)}m` : `${(v / 60).toFixed(1)}h`;

        const kpis = [
            {
                id: 'totalTickets',
                value: cur.total,
                color: '#5b73ff',
                sub: t('subAll'),
                delta: hasPrev ? this._deltaTag(cur.total, prev.total, false) : null,
            },
            {
                id: 'closed',
                value: cur.closed,
                color: '#10b981',
                sub: `${Math.round(Utils.Math.percentage(cur.closed, cur.total))}% ${t('subPercent')}`,
                delta: hasPrev ? this._deltaTag(cur.closed, prev.closed, false) : null,
            },
            {
                id: 'issue',
                value: cur.issue,
                color: '#f43f5e',
                sub: `${Math.round(Utils.Math.percentage(cur.issue, cur.total))}% ${t('subPercent')}`,
                delta: hasPrev ? this._deltaTag(cur.issue, prev.issue, true) : null,
            },
            {
                id: 'nonIssue',
                value: cur.nonIssue,
                color: '#06b6d4',
                sub: `${Math.round(Utils.Math.percentage(cur.nonIssue, cur.total))}% ${t('subPercent')}`,
                delta: hasPrev ? this._deltaTag(cur.nonIssue, prev.nonIssue, false) : null,
            },
            {
                id: 'activeEsc',
                value: cur.activeEsc,
                color: '#fb923c',
                sub: t('subForwarded'),
                delta: hasPrev ? this._deltaTag(cur.activeEsc, prev.activeEsc, true) : null,
            },
            {
                id: 'aht',
                value: ahtStr(cur.aht),
                color: '#8b5cf6',
                sub: t('subAHT'),
                delta: hasPrev ? this._deltaAHT(cur.aht, prev.aht) : null,
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
                value: `${cur.slaRate}%`,
                color: '#10b981',
                sub: t('subSLA'),
                delta: hasPrev ? this._deltaTag(cur.slaRate, prev.slaRate, false) : null,
            },
        ];

        document.getElementById('kpiBadge').textContent = filterSummary;

        grid.innerHTML = kpis.map(k => `
            <div class="kpi-card" style="--kpi-color:${k.color}">
                <div class="kpi-bar"></div>
                <div class="kpi-label">${t(k.id)}</div>
                <div class="kpi-value">${k.value}</div>
                <div class="kpi-sub"><span class="kpi-dot"></span>${k.sub}</div>
                ${k.delta ? `<div style="margin-top:6px;display:flex;align-items:center;gap:6px">${k.delta}<span class="kpi-compare">${prevLabel}</span></div>` : ''}
            </div>
        `).join('');
    },

    /**
     * Render escalation panel
     */
    renderEscalation(data) {
        const panel = document.getElementById('escalationPanel');
        if (!panel) return;

        const stats = DataProcessor.calculateEscalationStats(data);

        const prevData = DataProcessor.getPreviousPeriodData(appState.tickets, appState.filters);
        const prevStats = prevData.length ? DataProcessor.calculateEscalationStats(prevData) : null;
        const hasPrev = prevStats !== null && prevStats.total > 0;
        const prevLabel = this._getPrevLabel();

        let html = `
            <div class="escalation-stats">
                <div class="esc-card">
                    <div class="esc-card-label">${t('escTotal')}</div>
                    <div class="esc-card-value" style="color:#fb923c">${stats.total}</div>
                    <div class="esc-card-sub">${stats.rate.toFixed(1)}% ${t('ofTotal')}</div>
                    ${hasPrev ? `<div style="margin-top:5px;display:flex;align-items:center;gap:5px">${this._deltaTag(stats.total, prevStats.total, true)}<span style="font-size:10px;color:var(--text-muted)">${prevLabel}</span></div>` : ''}
                </div>
                <div class="esc-card">
                    <div class="esc-card-label">${t('escActive')}</div>
                    <div class="esc-card-value" style="color:#f43f5e">${stats.active}</div>
                    <div class="esc-card-sub">${t('subForwarded')}</div>
                    ${hasPrev ? `<div style="margin-top:5px;display:flex;align-items:center;gap:5px">${this._deltaTag(stats.active, prevStats.active, true)}<span style="font-size:10px;color:var(--text-muted)">${prevLabel}</span></div>` : ''}
                </div>
                <div class="esc-card">
                    <div class="esc-card-label">${t('escClosed')}</div>
                    <div class="esc-card-value" style="color:#10b981">${stats.closed}</div>
                    <div class="esc-card-sub">${stats.total > 0 ? Math.round((stats.closed / stats.total) * 100) : 0}% ${t('resolutionRate')}</div>
                </div>
                <div class="esc-card">
                    <div class="esc-card-label">${t('escRate')}</div>
                    <div class="esc-card-value" style="color:#8b5cf6">${stats.rate.toFixed(1)}%</div>
                    <div class="esc-card-sub">${t('ofTotal')}</div>
                </div>
            </div>
        `;

        if (stats.byProduct.length) {
            html += `
                <div class="esc-rows">
                    <div class="esc-row">
                        <span class="esc-row-label">${t('escByProduct')}</span>
                        <div style="display:flex;gap:6px;flex-wrap:wrap">
                            ${stats.byProduct.map(x => {
                                const clr = CONFIG.CHART.colors[x.name] || '#5b73ff';
                                return `<span class="esc-chip" style="background:${Utils.Color.toRGBA(clr, 0.15)};color:${clr}">${x.label} <strong>${x.total}</strong>${x.active > 0 ? ` <span style="background:${Utils.Color.toRGBA('#fb923c', 0.25)};color:#fb923c;padding:0 4px;border-radius:3px;font-size:10px">${x.active} ${t('active')}</span>` : ''}</span>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (stats.byTier.length) {
            html += `
                <div class="esc-rows">
                    <div class="esc-row">
                        <span class="esc-row-label">${t('escByTier')}</span>
                        <div style="display:flex;gap:6px;flex-wrap:wrap">
                            ${stats.byTier.map(x => `<span class="esc-chip" style="background:${Utils.Color.toRGBA(x.color, 0.15)};color:${x.color}">${x.label} <strong>${x.total}</strong>${x.active > 0 ? ` <span style="background:${Utils.Color.toRGBA('#fb923c', 0.25)};color:#fb923c;padding:0 4px;border-radius:3px;font-size:10px">${x.active} ${t('active')}</span>` : ''}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (stats.byType.length) {
            html += `
                <div class="esc-rows">
                    <div class="esc-row">
                        <span class="esc-row-label">${t('escByType')}</span>
                        <div style="display:flex;gap:6px;flex-wrap:wrap">
                            ${stats.byType.map(x => `<span class="esc-chip" style="background:${Utils.Color.toRGBA(x.color, 0.15)};color:${x.color}">${x.name} <strong>${x.total}</strong>${x.active > 0 ? ` <span style="background:${Utils.Color.toRGBA('#fb923c', 0.25)};color:#fb923c;padding:0 4px;border-radius:3px;font-size:10px">${x.active} ${t('active')}</span>` : ''}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (stats.active > 0) {
            const rows = stats.activeRows.map(r => `
                <tr>
                    <td>
                        <div class="esc-client">${r.client}</div>
                        ${r.company ? `<div class="esc-client-full">${r.company}</div>` : ''}
                    </td>
                    <td><div class="esc-problem">${r.problem}</div></td>
                    <td><span class="esc-prod-badge" style="background:${Utils.Color.toRGBA(r.productColor, 0.15)};color:${r.productColor}">${r.product}</span></td>
                    <td><span class="esc-pri-badge" style="background:${Utils.Color.toRGBA(r.priorityColor, 0.2)};color:${r.priorityColor}">${r.priority}</span></td>
                    <td><div class="esc-date">${r.date}</div>${r.startTime ? `<div style="font-size:10px;color:var(--text-muted)">${r.startTime}</div>` : ''}</td>
                    <td><span style="font-size:11px;padding:2px 7px;border-radius:4px;background:var(--surface-3);color:var(--text-sec)">${r.escalatedTo}</span></td>
                </tr>
            `).join('');

            html += `
                <div class="esc-active-detail">
                    <div class="esc-active-title">${t('activeEscalation', { count: stats.active, plural: stats.active > 1 ? 's' : '' })}</div>
                    <div class="esc-table-wrapper">
                        <table class="esc-table">
                            <thead>
                                <tr>
                                    <th>${t('thClient')}</th>
                                    <th>${t('thTask')}</th>
                                    <th>${t('thTag')}</th>
                                    <th>${t('thStatus')}</th>
                                    <th>${t('thDate')}</th>
                                    <th>${t('thEscalatedto')}</th>
                                </tr>
                            </thead>
                            <tbody>${rows}</tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        panel.innerHTML = html;
    },

    /**
     * Render all charts
     */
    renderCharts(data) {
        this._renderPriorityChart(data);
        this._renderTierChart(data);
        this._renderProductChart(data);
        this._renderFeatureChart(data);
        this._renderStaffChart(data);
        this._renderTrendChart(data);
        this._renderShiftChart(data);
    },

    /** Render priority distribution chart */
    _renderPriorityChart(data) {
        const chartData = DataProcessor.preparePriorityData(data);
        const chart = ChartEngine.createDoughnut(
            'chartPriority',
            chartData.labels,
            chartData.values,
            chartData.colors
        );

        const legend = document.getElementById('legendPriority');
        if (legend) {
            legend.innerHTML = chartData.labels.map((label, i) => `
                <div class="legend-item">
                    <div class="legend-dot" style="background:${chartData.colors[i]}"></div>
                    ${label} <strong style="color:${chartData.colors[i]}">${chartData.values[i]}</strong>
                </div>
            `).join('');
        }
    },

    /** Render tier distribution chart */
    _renderTierChart(data) {
        const chartData = DataProcessor.prepareTierData(data);
        if (chartData.labels.length === 0) return;

        ChartEngine.createStackedBar(
            'chartTier',
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );

        const legend = document.getElementById('legendTier');
        if (legend) {
            legend.innerHTML = `
                <div class="legend-item"><div class="legend-dot" style="background:${CONFIG.CHART.colors.non}"></div>${t('nonIssue')}</div>
                <div class="legend-item"><div class="legend-dot" style="background:${CONFIG.CHART.colors.issue}"></div>${t('issue')}</div>
                ${chartData.labels.map((label, i) => {
                    const rawTier = chartData.rawTiers[i];
                    const color = CONFIG.CHART.colors[rawTier] || ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5];
                    return `<div class="legend-item"><div class="legend-dot" style="background:${color}"></div>${label} <strong>${chartData.totals[i]}</strong></div>`;
                }).join('')}
            `;
        }
    },

    /** Render product distribution chart */
    _renderProductChart(data) {
        const chartData = DataProcessor.prepareProductData(data);
        if (chartData.labels.length === 0) return;
        ChartEngine.createStackedBar(
            'chartProduct',
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ],
            true
        );
    },

    /** Render feature distribution chart */
    _renderFeatureChart(data) {
        const chartData = DataProcessor.prepareFeatureData(data);
        if (chartData.labels.length === 0) return;
        ChartEngine.createStackedBar(
            'chartFeature',
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );
    },

    /** Render staff workload chart */
    _renderStaffChart(data) {
        const chartData = DataProcessor.prepareStaffData(data);
        if (chartData.labels.length === 0) {
            const container = document.getElementById('chartTicketStaff')?.parentElement;
            if (container) container.innerHTML = `<div class="task-empty">${t('noData')}</div>`;
            return;
        }
        ChartEngine.createSingleBar('chartTicketStaff', chartData.labels, chartData.values);
    },

    /** Render trend chart */
    _renderTrendChart(data) {
        const chartData = DataProcessor.prepareTrendData(data);
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
                if (!prev && !cur) return `<div class="trend-badge flat">→ ${label} ${t('stable')}</div>`;
                const delta = cur - prev;
                const pct = prev > 0 ? Math.abs(Math.round((delta / prev) * 100)) : 100;
                if (delta > 0) return `<div class="trend-badge up">↑ ${label} +${pct}%</div>`;
                if (delta < 0) return `<div class="trend-badge down">↓ ${label} −${pct}%</div>`;
                return `<div class="trend-badge flat">→ ${label} ${t('stable')}</div>`;
            };

            comp.innerHTML = `
                ${cmp(chartData.issue, t('issue'))}
                ${cmp(chartData.nonIssue, t('nonIssue'))}
                <span class="trend-context">${t('trendContext')}</span>
            `;
        }
    },

    /** Render shift distribution chart */
    _renderShiftChart(data) {
        const canonicalShifts = ['Pagi', 'Siang', 'Malam'];
        const shifts = canonicalShifts.filter(s => data.some(r => r.shift === s));

        if (shifts.length === 0 || data.length === 0) {
            const container = document.getElementById('chartShift')?.parentElement;
            if (container) container.innerHTML = `<div class="task-empty">${t('noData')}</div>`;
            return;
        }

        const nonIssue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Non Issue').length);
        const issue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Issue').length);
        const totals = shifts.map(s => data.filter(r => r.shift === s).length);

        const shiftLabelMap = { Pagi: t('morning'), Siang: t('day'), Malam: t('night') };
        const labels = shifts.map(s => shiftLabelMap[s] || s);

        const subtitleEl = document.getElementById('chartShiftSub');
        if (subtitleEl) {
            subtitleEl.textContent = labels.join(' · ');
        }

        ChartEngine.createStackedBar(
            'chartShift',
            labels,
            [
                { label: t('issue'), data: issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );

        const legend = document.getElementById('legendShift');
        if (legend) {
            legend.innerHTML = shifts.map((shift, i) => `
                <div class="legend-item">
                    <div class="legend-dot" style="background:${CONFIG.CHART.colors[shift]}"></div>
                    ${labels[i]} <strong style="color:${CONFIG.CHART.colors[shift]}">${totals[i]}</strong>
                </div>
            `).join('');
        }
    },

    /**
     * Render task section
     */
    renderTaskSection(tasks, filters) {
        const filtered = FilterEngine.applyTaskFilters(tasks, filters);
        const prevData = FilterEngine.getPreviousTaskData(tasks, filters);
        const prevMetrics = prevData.length ? DataProcessor.calculateTaskMetrics(prevData) : null;
        const prevLabel = this._getPrevLabel();

        const metrics = DataProcessor.calculateTaskMetrics(filtered);
        const completionRate = metrics.total > 0 ? Math.round((metrics.done / metrics.total) * 100) : 0;

        const taskStats = [
            { id: 'totalTasks', value: metrics.total, color: '#5b73ff', sub: t('totalTasks') },
            { id: 'done', value: metrics.done, color: '#10b981', sub: `${completionRate}% ${t('completed')}` },
            { id: 'progress', value: metrics.progress, color: '#f59e0b', sub: t('inProgress') },
            { id: 'totalWorkHours', value: Utils.Duration.formatHMS(metrics.totalMinutes), color: '#8b5cf6', sub: `${metrics.staffCount} ${t('activeStaff')}` },
        ];

        const grid = document.getElementById('taskKpiGrid');
        if (grid) {
            grid.innerHTML = taskStats.map(s => `
                <div class="kpi-card" style="--kpi-color:${s.color}">
                    <div class="kpi-bar"></div>
                    <div class="kpi-label">${t(s.id)}</div>
                    <div class="kpi-value">${s.value}</div>
                    <div class="kpi-sub"><span class="kpi-dot"></span>${s.sub}</div>
                    ${prevMetrics ? `<div style="margin-top:6px;display:flex;align-items:center;gap:6px">${this._deltaTag(metrics.total, prevMetrics.total, false)}<span class="kpi-compare">${prevLabel}</span></div>` : ''}
                </div>
            `).join('');
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
                legend.innerHTML = statusLabels.map((label, i) => `
                    <div class="legend-item">
                        <div class="legend-dot" style="background:${statusColors[i]}"></div>
                        ${label} <strong style="color:${statusColors[i]}">${statusData[i]}</strong>
                        <span style="color:var(--text-muted)">(${Math.round((statusData[i] / filtered.length) * 100)}%)</span>
                    </div>
                `).join('');
            }
        }

        const staffData = this._prepareTaskStaffData(filtered);
        if (staffData.labels.length) {
            ChartEngine.createSingleBar('chartTaskStaff', staffData.labels, staffData.values);
        } else {
            const container = document.getElementById('chartTaskStaff')?.parentElement;
            if (container) container.innerHTML = `<div class="task-empty">${t('noData')}</div>`;
        }

        this._populateTaskFilters(filtered);
        this.renderTaskTable(filtered);
    },

    /** Prepare task staff data */
    _prepareTaskStaffData(data) {
        const staffs = [...new Set(data.map(t => t.staff))].sort();
        const counts = staffs.map(s => data.filter(t => t.staff === s).length);
        const combined = staffs.map((s, i) => ({ label: s, count: counts[i] }))
            .filter(x => x.count > 0)
            .sort((a, b) => b.count - a.count);
        return {
            labels: combined.map(x => x.label.split(' ').slice(0, 2).join(' ')),
            values: combined.map(x => x.count),
        };
    },

    /** Populate task filters */
    _populateTaskFilters(data) {
        const staffs = [...new Set(data.map(t => t.staff))].sort();

        const staffSelect = document.getElementById('taskFilterStaffSelect');
        if (staffSelect) {
            const currentVal = staffSelect.value;
            staffSelect.innerHTML = `<option value="all">${t('taskAllStaff')}</option>`;
            staffs.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s;
                opt.textContent = s;
                staffSelect.appendChild(opt);
            });
            if (staffSelect.querySelector(`option[value="${currentVal}"]`)) {
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

    /**
     * Render task table with pagination
     */
    renderTaskTable(data) {
        const search = appState.ui.taskSearch || '';
        const staffFilter = appState.ui.taskFilterStaff || 'all';
        const statusFilter = appState.ui.taskFilterStatus || 'all';

        let filtered = data.filter(t => {
            if (staffFilter !== 'all' && t.staff !== staffFilter) return false;
            if (statusFilter !== 'all' && t.status !== statusFilter) return false;
            if (search && !t.task.toLowerCase().includes(search) && !t.staff.toLowerCase().includes(search))
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
            tbody.innerHTML = `<tr><td colspan="6"><div class="task-empty">${t('noTasks')}</div></td></tr>`;
            this._renderPagination(0, 0);
            return;
        }

        tbody.innerHTML = pageItems.map(t => {
            const statusColor = t.status === 'Done' ? '#10b981' : '#f59e0b';
            const initials = Utils.String.escapeHtml(Utils.String.getInitials(t.staff));
            const tags = (t.note || '').split(' ').filter(x => x.startsWith('#'));
            const tagHtml = tags.length ?
                tags.map(tag => `<span class="task-tag">${Utils.String.escapeHtml(tag)}</span>`).join(' ') :
                (t.note ? `<span style="font-size:11px;color:var(--text-muted)">${Utils.String.escapeHtml(t.note)}</span>` : '-');
            const staffShort = Utils.String.escapeHtml(t.staff.split(' ').slice(0, 2).join(' '));

            return `<tr>
                <td><div class="task-staff-cell"><div class="task-avatar">${initials}</div><span>${staffShort}</span></div></td>
                <td><div class="task-name">${Utils.String.escapeHtml(t.task)}</div></td>
                <td>${tagHtml}</td>
                <td><div class="task-duration">${Utils.Duration.formatHMS(Utils.Duration.parse(t.duration))}</div></td>
                <td><span class="task-status-badge" style="background:${Utils.Color.toRGBA(statusColor, 0.18)};color:${statusColor}">${t.status}</span></td>
                <td><div class="task-date">${Utils.Date.formatTaskDate(t.start)}</div></td>
            </tr>`;
        }).join('');

        this._renderPagination(filtered.length, totalPages);
    },

    /** Render pagination controls */
    _renderPagination(totalItems, totalPages) {
        const el = document.getElementById('taskPagination');
        if (!el) return;

        const page = Math.min(appState.ui.taskPage, totalPages || 1);
        const startIdx = (page - 1) * CONFIG.PAGINATION.pageSize + 1;
        const endIdx = Math.min(page * CONFIG.PAGINATION.pageSize, totalItems);

        const infoText = totalItems > 0 ?
            `${t('showing')} ${startIdx}–${endIdx} ${t('from')} ${totalItems} ${t('totalTasks').toLowerCase()}` :
            `${t('noTasks')}`;

        if (totalPages <= 1) {
            el.innerHTML = `<div class="pagination-info">${infoText}</div>`;
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

        const btnsHtml = pages.map(p => {
            if (p === '…') return `<span class="pagination-ellipsis">…</span>`;
            return `<button class="pagination-btn${p === page ? ' active' : ''}" data-page="${p}">${p}</button>`;
        }).join('');

        el.innerHTML = `
            <div class="pagination-info">${infoText}</div>
            <div class="pagination-buttons">
                <button class="pagination-btn" data-page="prev" ${page <= 1 ? 'disabled' : ''}>&lsaquo;</button>
                ${btnsHtml}
                <button class="pagination-btn" data-page="next" ${page >= totalPages ? 'disabled' : ''}>&rsaquo;</button>
            </div>
        `;

        el.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.page;
                let newPage;
                if (target === 'prev') newPage = page - 1;
                else if (target === 'next') newPage = page + 1;
                else newPage = parseInt(target, 10);

                if (newPage >= 1 && newPage <= totalPages) {
                    appState.ui.taskPage = newPage;
                    this.renderTaskTable(appState.filteredTasks);
                }
            });
        });
    },

    /**
     * Update sync status indicator
     */
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
            label.textContent = `${t('live')} · sync ${ts}`;
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

    /** Generate delta tag for KPI comparison */
    _deltaTag(cur, prev, invertGood = false) {
        if (prev === 0 && cur === 0) return `<span class="kpi-delta neutral">→ 0</span>`;
        if (prev === 0) {
            const cls = invertGood ? 'down-bad' : 'up-good';
            return `<span class="kpi-delta ${cls}">↑ new</span>`;
        }
        const diff = cur - prev;
        const pct = Math.abs(Math.round((diff / prev) * 100));
        if (diff === 0) return `<span class="kpi-delta neutral">→ 0%</span>`;
        if (diff > 0) {
            const cls = invertGood ? 'up' : 'up-good';
            return `<span class="kpi-delta ${cls}">↑ +${pct}%</span>`;
        }
        const cls = invertGood ? 'down' : 'down-bad';
        return `<span class="kpi-delta ${cls}">↓ −${pct}%</span>`;
    },

    /** Generate delta tag for AHT comparison */
    _deltaAHT(cur, prev) {
        if (prev === 0 && cur === 0) return `<span class="kpi-delta neutral">→ 0%</span>`;
        if (prev === 0) return '';
        const diff = cur - prev;
        const pct = Math.abs(Math.round((diff / prev) * 100));
        if (diff === 0) return `<span class="kpi-delta neutral">→ 0%</span>`;
        if (diff > 0) return `<span class="kpi-delta down-bad">↑ +${pct}%</span>`;
        return `<span class="kpi-delta up-good">↓ −${pct}%</span>`;
    },

    /** Get previous period label */
    _getPrevLabel() {
        const { week, dateFrom, dateTo } = appState.filters;
        if (dateFrom || dateTo) return t('vsPrevPeriod');
        if (week !== 'all') return t('vsPrevWeek');
        return t('vsPrevHalf');
    },

    /**
     * Populate all dynamic filters from data
     */
    populateDynamicFilters(tickets, tasks) {
        // Gabungan Ticket + Task, supaya bulan yang cuma punya data Task (atau
        // sebaliknya) tetap muncul sebagai opsi — dan default bulan berjalan
        // bisa ke-set walau salah satu sumber data belum punya baris di bulan itu.
        const combinedForMonth = [...tickets, ...tasks];

        // Bulan: urut kronologis kalender (Januari → Desember), bukan alfabetis
        this._populateFilter('filterMonth', combinedForMonth, 'month', 'allMonths', (v) => v.replace(/\[\d+\]\s*/, ''), (a, b) => {
            const na = this._MONTH_ORDER[a.label.trim().toLowerCase()] ?? 999;
            const nb = this._MONTH_ORDER[b.label.trim().toLowerCase()] ?? 999;
            if (na !== nb) return na - nb;
            return a.label.localeCompare(b.label, 'en', { sensitivity: 'base' }); // fallback kalau nama bulan tak dikenali
        });
        this._populateFilter('filterWeek', tickets, 'week', 'allWeeks');
        this._populateFilter('filterProduct', tickets, 'product', 'allProducts');
        this._populateFilter('filterTier', tickets, 'tier', 'allTiers', (v) => Utils.String.formatTier(v));
        this._populateShiftFilter();
        this._populateFilter('filterStaff', tickets, 'staff', 'allStaff');
        this._populateTaskStaffFilter(tasks);
    },

    /** Peta nama bulan (EN & ID) ke nomor urut kalender, untuk sorting kronologis */
    _MONTH_ORDER: {
        january: 1, februari: 2, february: 2, march: 3, maret: 3, april: 4,
        may: 5, mei: 5, june: 6, juni: 6, july: 7, juli: 7, august: 8, agustus: 8,
        september: 9, october: 10, oktober: 10, november: 11, december: 12, desember: 12,
    },

    /** Generic filter population. sortFn opsional: (a, b) comparator custom; default alfabetis. */
    _populateFilter(selectId, data, key, allLabelKey, formatFn, sortFn) {
        const select = document.getElementById(selectId);
        if (!select) return;

        const currentVal = select.value;
        const rawValues = [...new Set(data.map(r => r[key]))].filter(Boolean);

        // Default: urutkan berdasarkan label yang ditampilkan (abjad), bukan raw value —
        // supaya prefix tersembunyi di sheet (mis. "[01] January") tidak
        // mengubah urutan alfabetis yang dilihat user. Trim + base sensitivity
        // supaya variasi spasi/huruf besar-kecil di data sheet tidak merusak urutan.
        const defaultSort = (a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base' });

        const options = rawValues
            .map(val => ({ val, label: (formatFn ? formatFn(val) : val).trim() }))
            .sort(sortFn || defaultSort);

        select.innerHTML = `<option value="all">${t(allLabelKey)}</option>`;

        options.forEach(({ val, label }) => {
            const opt = document.createElement('option');
            opt.value = val;
            opt.textContent = label;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }
    },

    /** Populate shift filter with the 3 canonical shifts only (Pagi/Siang/Malam) */
    _populateShiftFilter() {
        const select = document.getElementById('filterShift');
        if (!select) return;

        const currentVal = select.value;
        const shifts = [
            { value: 'Pagi', label: t('morning') },
            { value: 'Siang', label: t('day') },
            { value: 'Malam', label: t('night') },
        ];

        select.innerHTML = `<option value="all">${t('allShifts')}</option>`;
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

    /** Populate task staff filter */
    _populateTaskStaffFilter(tasks) {
        const select = document.getElementById('taskFilterStaffSelect');
        if (!select) return;

        const staffs = [...new Set(tasks.map(t => t.staff))].filter(Boolean).sort();
        const currentVal = select.value;

        select.innerHTML = `<option value="all">${t('taskAllStaff')}</option>`;

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
   EVENT HANDLERS
   ================================================================ */

const EventHandlers = {

    /** Initialize all event listeners */
    init() {
        // Filter change events
        const filterIds = ['filterMonth', 'filterWeek', 'filterProduct', 'filterTier', 'filterShift', 'filterStaff'];
        filterIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => this.onFilterChange());
        });

        ['filterDateFrom', 'filterDateTo'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => this.onFilterChange());
        });

        // Reset filters
        const resetBtn = document.getElementById('btnResetFilters');
        if (resetBtn) resetBtn.addEventListener('click', () => this.onResetFilters());

        // Menu tabs
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const menu = tab.dataset.menu;
                if (menu) this.onMenuChange(menu);
            });
        });

        // Language toggle
        document.getElementById('btnLang')?.addEventListener('click', () => {
            const currentLang = appState.ui.language;
            const newLang = currentLang === 'id' ? 'en' : 'id';
            this.onLanguageChange(newLang);
        });

        // Theme toggle
        document.getElementById('btnTheme')?.addEventListener('click', () => {
            toggleTheme();
            this.refreshUI();
        });

        // Refresh
        document.getElementById('btnRefresh')?.addEventListener('click', () => this.onRefresh());
        document.getElementById('syncBadge')?.addEventListener('click', () => this.onRefresh());

        // Task search with debounce
        const searchInput = document.getElementById('taskSearchInput');
        if (searchInput) {
            const debounced = Utils.debounce(() => this.onTaskSearch(), 300);
            searchInput.addEventListener('input', debounced);
        }

        // Task filters
        ['taskFilterStaffSelect', 'taskFilterStatusSelect'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => this.onTaskFilterChange());
        });
    },

    /** Handle filter change */
    onFilterChange() {
        this.validateFilters();
        this._applyFilters();
        this.refreshUI();
    },

    /** Reset all filters to default */
    onResetFilters() {
        const defaults = {
            filterMonth: 'all',
            filterWeek: 'all',
            filterProduct: 'all',
            filterTier: 'all',
            filterShift: 'all',
            filterStaff: 'all',
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

        this.validateFilters();
        this._applyFilters();
        this.refreshUI();
    },

    /** Handle menu change */
    onMenuChange(menu) {
        appState.ui.currentMenu = menu;

        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.menu === menu);
            tab.setAttribute('aria-selected', tab.dataset.menu === menu);
        });

        document.querySelectorAll('.menu-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `panel${Utils.String.capitalize(menu)}`);
        });

        const dimGroup = document.getElementById('filterDimensionGroup');
        const dimSep = document.getElementById('filterSeparatorDim');
        if (dimGroup) dimGroup.style.display = menu === 'ticket' ? '' : 'none';
        if (dimSep) dimSep.style.display = menu === 'ticket' ? '' : 'none';
    },

    /** Handle language change */
    onLanguageChange(lang) {
        appState.ui.language = lang;
        const btnLang = document.getElementById('btnLang');
        if (btnLang) {
            btnLang.textContent = lang === 'id' ? '🌐 ID' : '🌐 EN';
            btnLang.classList.toggle('on', lang === 'id');
        }
        document.documentElement.setAttribute('lang', lang);
        this.applyStaticTranslations();
        this.refreshUI();
    },

    /** Terjemahkan elemen statis di HTML yang tidak di-generate ulang oleh render* */
    applyStaticTranslations() {
        const map = {
            appTitle: 'appTitle',
            lblMenuTicket: 'menuTicket',
            lblMenuTask: 'menuTask',
            lblPeriod: 'period',
            lblDateRange: 'dateRange',
            lblDimension: 'dimension',
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
            thTaskStaff: 'thClient', // lihat catatan di bawah soal key yang belum ada
            footerText: 'footer',
        };
        Object.entries(map).forEach(([id, key]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = t(key);
        });

        const searchInput = document.getElementById('taskSearchInput');
        if (searchInput) searchInput.placeholder = t('taskSearchPlaceholder');
    },

    /** Handle manual refresh */
    onRefresh() {
        this._refreshData();
    },

    /** Handle task search */
    onTaskSearch() {
        const input = document.getElementById('taskSearchInput');
        appState.ui.taskSearch = input ? input.value.toLowerCase() : '';
        appState.ui.taskPage = 1;
        UIRenderer.renderTaskTable(appState.filteredTasks);
    },

    /** Handle task filter change */
    onTaskFilterChange() {
        const staffSelect = document.getElementById('taskFilterStaffSelect');
        const statusSelect = document.getElementById('taskFilterStatusSelect');
        appState.ui.taskFilterStaff = staffSelect ? staffSelect.value : 'all';
        appState.ui.taskFilterStatus = statusSelect ? statusSelect.value : 'all';
        appState.ui.taskPage = 1;
        UIRenderer.renderTaskTable(appState.filteredTasks);
    },

    /** Read filter values from DOM */
    _readFilters() {
        appState.filters.month = document.getElementById('filterMonth')?.value || 'all';
        appState.filters.week = document.getElementById('filterWeek')?.value || 'all';
        appState.filters.dateFrom = document.getElementById('filterDateFrom')?.value || '';
        appState.filters.dateTo = document.getElementById('filterDateTo')?.value || '';
        appState.filters.product = document.getElementById('filterProduct')?.value || 'all';
        appState.filters.tier = document.getElementById('filterTier')?.value || 'all';
        appState.filters.shift = document.getElementById('filterShift')?.value || 'all';
        appState.filters.staff = document.getElementById('filterStaff')?.value || 'all';
    },

    /** Apply filters to data */
    _applyFilters() {
        const filters = appState.filters;
        appState.filteredTickets = FilterEngine.applyTicketFilters(appState.tickets, filters);
        appState.filteredTasks = FilterEngine.applyTaskFilters(appState.tasks, filters);

        const totalPages = Utils.Array.totalPages(appState.filteredTasks, CONFIG.PAGINATION.pageSize);
        if (appState.ui.taskPage > totalPages) appState.ui.taskPage = totalPages || 1;
    },

    /** Refresh data from API */
    async _refreshData() {
        UIRenderer.updateSyncStatus('syncing', null);

        const success = await DataLoader.load();

        if (success) {
            UIRenderer.updateSyncStatus('live', appState.meta.lastSync);
        } else if (window.location.protocol === 'file:') {
            UIRenderer.updateSyncStatus('fileproto', null);
        } else {
            UIRenderer.updateSyncStatus('error', null);
        }

        this._applyFilters();
        this.refreshUI();
    },

    /** Refresh the entire UI */
    refreshUI() {
        const tickets = appState.filteredTickets;
        const tasks = appState.filteredTasks;
        const filters = appState.filters;

        UIRenderer.populateDynamicFilters(appState.tickets, appState.tasks);

        const prevTicketData = DataProcessor.getPreviousPeriodData(appState.tickets, filters);
        const filterSummary = FilterEngine.getFilterSummary(filters);

        UIRenderer.renderKPI(tickets, prevTicketData, filterSummary);
        UIRenderer.renderEscalation(tickets);
        UIRenderer.renderCharts(tickets);
        UIRenderer.renderTaskSection(appState.tasks, filters);
        
        this.validateFilters();
    },

    /**
     * Validate and enforce filter mutual exclusivity
     */
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
            // Month/Week yang mengendalikan rentang tanggal → auto-fill & lock date input
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
            weekSelect.disabled = false;
            monthSelect.style.opacity = '1';
            weekSelect.style.opacity = '1';
            monthSelect.style.cursor = 'pointer';
            weekSelect.style.cursor = 'pointer';

        } else {
            // Tidak ada period dipilih → bersihkan auto-fill & bebaskan date input
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
                // Date range manual yang mengendalikan → lock month & week
                monthSelect.value = 'all';
                weekSelect.value = 'all';
                monthSelect.disabled = true;
                weekSelect.disabled = true;
                monthSelect.style.opacity = '0.5';
                weekSelect.style.opacity = '0.5';
                monthSelect.style.cursor = 'not-allowed';
                weekSelect.style.cursor = 'not-allowed';
            } else {
                // Tidak ada filter periode sama sekali → semua bebas
                monthSelect.disabled = false;
                weekSelect.disabled = false;
                monthSelect.style.opacity = '1';
                weekSelect.style.opacity = '1';
                monthSelect.style.cursor = 'pointer';
                weekSelect.style.cursor = 'pointer';
            }
        }

        this._readFilters();
    },
};

/* ================================================================
   HELPER FUNCTIONS
   ================================================================ */

/**
 * Get date range from month/week filters
 */
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
    
    const formatDate = (d) => {
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const yyyy = d.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
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

    /** Mulai animasi loading — dipanggil sebelum proses fetch data dimulai */
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

        // Progress disimulasikan naik pelan sampai 90%. Sisa 10% baru
        // dipenuhi saat finish() dipanggil (setelah data benar-benar tampil).
        clearInterval(this._timer);
        this._timer = setInterval(() => {
            if (this._target < 90) {
                this._target = Math.min(90, this._target + (Math.random() * 4 + 1));
            }
            if (this._current < this._target) {
                this._current += 1;
                this._render();
            }
        }, 100);
    },

    /** Update tampilan angka & progress bar */
    _render() {
        const countEl = document.getElementById('appLoadingCount');
        const barEl = document.getElementById('appLoadingBarFill');
        const val = Math.min(100, Math.round(this._current));
        if (countEl) countEl.textContent = val;
        if (barEl) barEl.style.width = `${val}%`;
    },

    /**
     * Tandai loading selesai — WAJIB dipanggil setelah data benar-benar
     * sudah dirender ke DOM (bukan sekadar setelah fetch API selesai),
     * supaya overlay hanya hilang ketika konten sudah benar-benar muncul.
     */
    finish() {
        if (this._finished) return;
        this._finished = true;

        const overlay = document.getElementById('appLoadingOverlay');
        if (!overlay) {
            clearInterval(this._timer);
            return;
        }

        clearInterval(this._rushTimer);
        this._rushTimer = setInterval(() => {
            this._current += 3;
            if (this._current >= 100) {
                this._current = 100;
                this._render();
                clearInterval(this._rushTimer);
                clearInterval(this._timer);

                setTimeout(() => {
                    overlay.classList.add('is-hidden');
                    setTimeout(() => { overlay.style.display = 'none'; }, 400);
                }, 200);
                return;
            }
            this._render();
        }, 20);
    },
};

/* ================================================================
   APPLICATION INITIALIZATION
   ================================================================ */

const App = {

    /** Initialize the application */
    async init() {
        LoadingOverlay.start();

        const success = await DataLoader.load();

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
        this._setDefaultMonthFilter();

        EventHandlers._readFilters();
        EventHandlers._applyFilters();
        EventHandlers.init();
        EventHandlers.refreshUI();

        // Overlay baru disembunyikan di sini — setelah semua KPI, chart,
        // escalation panel, dan task table selesai dirender ke layar.
        LoadingOverlay.finish();

        // Auto-refresh
        setInterval(() => {
            EventHandlers.onRefresh();
        }, CONFIG.APP.refreshInterval);

        console.log(`${CONFIG.APP.name} v${CONFIG.APP.version} initialized`);
        console.log(`Data source: ${appState.meta.dataSource}`);
        console.log(`Tickets: ${appState.tickets.length}, Tasks: ${appState.tasks.length}`);
    },

    /** Set default month filter to the current calendar month, if available in data */
    _setDefaultMonthFilter() {
        const monthSelect = document.getElementById('filterMonth');
        if (!monthSelect) return;
        const now = new Date();
        const candidates = [
            now.toLocaleDateString('en-US', { month: 'long' }),
            now.toLocaleDateString('id-ID', { month: 'long' }),
        ].map(s => s.trim().toLowerCase());
        const match = Array.from(monthSelect.options).find(opt => {
            if (opt.value === 'all') return false;
            const clean = opt.value.replace(/\[\d+\]\s*/, '').trim().toLowerCase();
            return candidates.includes(clean);
        });
        if (match) monthSelect.value = match.value;
        // Week sengaja tidak disentuh (tetap 'all') — hanya bulan yang di-default.
    },
};

/* ================================================================
   BOOT
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});