/* ================================================================
   CONFIGURATION
   ================================================================ */

const CONFIG = {
    APP: {
        name: 'Helpdesk Monitor',
        version: '2.0.0',
        defaultLanguage: 'en', // default EN
        defaultTheme: 'light', // default LIGHT
        refreshInterval: 60000,
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
        font: { family: 'Inter, sans-serif', size: 11 },
        cutout: '65%',
        borderRadius: 5,
        tension: 0.35,
    },
    PAGINATION: {
        pageSize: 10,
    },
    API: {
        baseUrl: 'https://script.google.com/macros/s/AKfycbw_-uPyFzh-1wQfwTOENZ67dufH6FS7mcZn-xz_HgVp6ZcTUKUE9BSo21l4iKyX0JBJ/exec',
        tickets: 'https://script.google.com/macros/s/AKfycbw_-uPyFzh-1wQfwTOENZ67dufH6FS7mcZn-xz_HgVp6ZcTUKUE9BSo21l4iKyX0JBJ/exec?action=tickets',
        tasks: 'https://script.google.com/macros/s/AKfycbw_-uPyFzh-1wQfwTOENZ67dufH6FS7mcZn-xz_HgVp6ZcTUKUE9BSo21l4iKyX0JBJ/exec?action=tasks',
        all: 'https://script.google.com/macros/s/AKfycbw_-uPyFzh-1wQfwTOENZ67dufH6FS7mcZn-xz_HgVp6ZcTUKUE9BSo21l4iKyX0JBJ/exec?action=all',
    },
    DATES: {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        shifts: ['Pagi', 'Siang', 'Malam'],
    },
    PRIORITIES: ['Critical', 'High', 'Medium', 'Low'],
    TIERS: ['Tier1', 'Tier2', 'Tier3'],
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
        thStaff: 'Staff',
        thTask: 'Task',
        thTag: 'Tag',
        thDuration: 'Durasi',
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
        thStaff: 'Staff',
        thTask: 'Task',
        thTag: 'Tag',
        thDuration: 'Duration',
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
    }
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
        parseDate: (str) => {
            const parts = str.split('/').map(Number);
            return new Date(parts[2], parts[1] - 1, parts[0]);
        },

        parseDateInput: (str) => {
            const parts = str.split('-').map(Number);
            return new Date(parts[0], parts[1] - 1, parts[2]);
        },

        parseTaskDate: (str) => {
            if (!str) return null;
            const [datePart, timePart] = str.split(' ');
            const [d, mon, y] = datePart.split('-');
            const [hh, mm, ss] = (timePart || '0:0:0').split(':').map(Number);
            const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
            return new Date(Number(y), monthMap[mon], Number(d), hh || 0, mm || 0, ss || 0);
        },

        taskDateOnly: (str) => {
            const dt = Utils.Date.parseTaskDate(str);
            return dt ? new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()) : null;
        },

        formatTime: (date) => {
            if (!date) return '';
            const h = String(date.getHours()).padStart(2, '0');
            const m = String(date.getMinutes()).padStart(2, '0');
            return `${h}:${m}`;
        },

        formatTaskDate: (str) => {
            if (!str) return '';
            const parts = str.split(' ');
            const datePart = parts[0] || '';
            if (datePart) {
                const [d, mon, y] = datePart.split('-');
                const monthMap = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', 
                                Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
                const monthNum = monthMap[mon] || mon;
                const day = String(Number(d)).padStart(2, '0');
                return `${day}/${monthNum}/${y}`;
            }
            return datePart;
        },
    },

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
    },

    Math: {
        sum: (arr) => arr.reduce((a, b) => a + b, 0),
        average: (arr) => arr.length ? Utils.Math.sum(arr) / arr.length : 0,
        percentage: (part, total) => total > 0 ? (part / total) * 100 : 0,
        clamp: (val, min, max) => Math.min(Math.max(val, min), max),
        round: (val, decimals) => Number(val.toFixed(decimals)),
    },

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

    Duration: {
        parse: (str) => {
            if (!str) return 0;
            const parts = str.split(':').map(Number);
            return parts[0] * 60 + parts[1] + (parts[2] || 0) / 60;
        },

        format: (minutes) => {
            if (minutes < 60) return `${minutes.toFixed(1)}m`;
            return `${(minutes / 60).toFixed(1)}h`;
        },

        sum: (items, key) => {
            return items.reduce((acc, item) => acc + Utils.Duration.parse(item[key] || ''), 0);
        },
    },

    Color: {
        toRGBA: (hex, alpha) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r},${g},${b},${alpha})`;
        },
    },

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

    debounce: (fn, delay) => {
        let timer = null;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    },

    uid: () => Date.now().toString(36) + Math.random().toString(36).slice(2),
};

/* ================================================================
   TRANSLATION
   ================================================================ */

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

    async fetchCSV(url) {
        const bust = (url.includes('?') ? '&' : '?') + '_t=' + Date.now();
        const response = await fetch(url + bust, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const text = await response.text();
        return this.parseCSV(text);
    },

    parseCSV(text) {
        const rows = [];
        let row = [],
            field = '',
            inQuotes = false;
        for (let i = 0; i < text.length; i++) {
            const c = text[i],
                next = text[i + 1];
            if (inQuotes) {
                if (c === '"' && next === '"') { field += '"';
                    i++; } else if (c === '"') { inQuotes = false; } else { field += c; }
            } else {
                if (c === '"') { inQuotes = true; } else if (c === ',') { row.push(field);
                    field = ''; } else if (c === '\r') { } else if (c === '\n') { row.push(field);
                    rows.push(row);
                    row = [];
                    field = ''; } else { field += c; }
            }
        }
        if (field.length || row.length) { row.push(field);
            rows.push(row); }
        return rows.filter(r => r.length > 1 || (r.length === 1 && r[0] !== ''));
    },

    buildHeaderMap(headerRow) {
        const map = {};
        headerRow.forEach((h, i) => {
            const key = h.trim().toLowerCase().replace(/\s+/g, '');
            map[key] = i;
        });
        return map;
    },

    col(rowArr, map, ...names) {
        for (const n of names) {
            // Normalisasi nama yang dicari: lowercase + hapus spasi
            const key = n.toLowerCase().replace(/\s+/g, '');
            
            // Coba cari langsung di map
            if (map[key] !== undefined) {
                const v = rowArr[map[key]];
                if (v !== undefined && v !== '') return v.trim();
            }
            
            // Coba cari dengan mencocokkan substring (untuk header yang punya spasi tersembunyi)
            for (const [mapKey, index] of Object.entries(map)) {
                // Jika mapKey mengandung nama yang dicari (case insensitive)
                if (mapKey.toLowerCase().includes(key) || key.includes(mapKey.toLowerCase())) {
                    const v = rowArr[index];
                    if (v !== undefined && v !== '') return v.trim();
                }
            }
        }
        return '';
    },

    normalizeYesNo(value) {
        const s = (value || '').trim().toLowerCase();
        if (['yes', 'y', 'onsla', 'true', '1', 'escalated'].includes(s)) return 'Yes';
        if (['no', 'n', 'offsla', 'off sla', 'false', '0'].includes(s)) return 'No';
        return value || '';
    },

    normalizeTime(s) { return (s || '').trim(); },

    mapTicketRows(rows) {
        if (rows.length < 2) return [];
        
        // Gunakan index langsung (hardcoded) karena posisi kolom sudah diketahui
        const dateIdx = 0;
        const dayIdx = 1;
        const monthIdx = 2;
        const weekIdx = 3;
        const clientIdx = 4;
        const staffIdx = 5;
        const productIdx = 6;
        const typeIdx = 7;
        const escIdx = 8;
        const statusIdx = 9;
        const priorityIdx = 10;
        const featureIdx = 11;
        const startTimeIdx = 12;
        const htIdx = 14;
        const tierIdx = 16; // <-- PERBAIKAN: dari 17 menjadi 16
        const problemIdx = 17; // <-- PERBAIKAN: dari 18 menjadi 17
        const onSLAIdx = 18; // <-- PERBAIKAN: dari 19 menjadi 18
        const shiftIdx = 19; // <-- PERBAIKAN: dari 20 menjadi 19
        
        const out = [];
        for (let i = 1; i < rows.length; i++) {
            const r = rows[i];
            if (!r || r.every(c => !c || !c.trim())) continue;
            
            const date = r[dateIdx]?.trim() || '';
            if (!date) continue;
            
            const month = r[monthIdx]?.trim() || '';
            const week = r[weekIdx]?.trim() || '';
            
            // Debug untuk data pertama
            if (i <= 3) {
                console.log(`📝 Row ${i} parsed (direct index):`, { 
                    date, 
                    month, 
                    week,
                    tier: r[tierIdx]?.trim() || '',
                    shift: r[shiftIdx]?.trim() || '',
                    problem: r[problemIdx]?.trim() || '',
                });
            }
            
            out.push({
                date: date,
                day: r[dayIdx]?.trim() || '',
                month: month,
                week: week,
                product: r[productIdx]?.trim() || '',
                type: r[typeIdx]?.trim() || '',
                esc: this.normalizeYesNo(r[escIdx]?.trim() || ''),
                status: r[statusIdx]?.trim() || '',
                priority: r[priorityIdx]?.trim() || '',
                feature: r[featureIdx]?.trim() || '',
                shift: r[shiftIdx]?.trim() || '',
                tier: r[tierIdx]?.trim() || '',
                onSLA: this.normalizeYesNo(r[onSLAIdx]?.trim() || ''),
                ht: r[htIdx]?.trim() || '',
                client: r[clientIdx]?.trim() || '',
                problem: r[problemIdx]?.trim() || '',
                startTime: r[startTimeIdx]?.trim() || '',
                staff: r[staffIdx]?.trim() || '',
            });
        }
        console.log(`✅ Mapped ${out.length} tickets`);
        
        if (out.length > 0) {
            console.log('📊 Sample mapped ticket:', out[0]);
            console.log('📅 Month values sample:', out.slice(0, 5).map(t => t.month));
            console.log('📊 Tier values sample:', out.slice(0, 5).map(t => t.tier));
        }
        
        return out;
    },

    mapTaskRows(rows) {
        if (rows.length < 2) return [];
        const map = this.buildHeaderMap(rows[0]);
        const out = [];
        for (let i = 1; i < rows.length; i++) {
            const r = rows[i];
            if (!r || r.every(c => !c || !c.trim())) continue;
            const staff = this.col(r, map, 'StaffMember', 'Staff Member', 'Staff');
            const task = this.col(r, map, 'Task');
            if (!staff && !task) continue;
            out.push({
                staff,
                task,
                month: this.col(r, map, 'Month', 'month', 'Bulan'),
                week: this.col(r, map, 'Week', 'week', 'Minggu'),
                start: this.col(r, map, 'StartTime', 'Start Time'),
                end: this.col(r, map, 'EndTime', 'End Time'),
                note: this.col(r, map, 'Note'),
                duration: this.col(r, map, 'Duration'),
                status: this.col(r, map, 'Status'),
                week: this.col(r, map, 'Week'),
            });
        }
        return out;
    },

    async load() {
        const protocol = window.location.protocol;

        if (protocol === 'file:') {
            console.warn('File protocol detected, cannot fetch data');
            appState.tickets = [];
            appState.tasks = [];
            appState.meta.dataSource = 'error';
            appState.meta.lastSync = new Date();
            return false;
        }

        try {
            const [ticketRows, taskRows] = await Promise.all([
                this.fetchCSV(CONFIG.API.tickets),
                this.fetchCSV(CONFIG.API.tasks),
            ]);

            const mappedTickets = this.mapTicketRows(ticketRows);
            const mappedTasks = this.mapTaskRows(taskRows);

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

    calculateKPIs(data) {
        const total = data.length;
        const closed = data.filter(r => r.status === 'Closed').length;
        const issue = data.filter(r => r.type === 'Issue').length;
        const nonIssue = data.filter(r => r.type === 'Non Issue').length;
        const activeEsc = data.filter(r => r.esc === 'Yes' && r.status !== 'Closed').length;
        const onSLA = data.filter(r => r.onSLA === 'Yes').length;
        const slaRate = total > 0 ? Math.round((onSLA / total) * 100) : 0;

        const totalMinutes = data.reduce((acc, r) => {
            if (!r.ht) return acc;
            const parts = r.ht.split(':').map(Number);
            return acc + parts[0] * 60 + parts[1] + (parts[2] || 0) / 60;
        }, 0);
        const aht = total > 0 ? totalMinutes / total : 0;

        return { total, closed, issue, nonIssue, activeEsc, slaRate, aht };
    },

    calculateEscalationStats(data) {
        const esc = data.filter(r => r.esc === 'Yes');
        const total = esc.length;
        const active = esc.filter(r => r.status !== 'Closed').length;
        const closed = esc.filter(r => r.status === 'Closed').length;
        const rate = data.length > 0 ? (total / data.length) * 100 : 0;

        const products = [...new Set(data.map(r => r.product))].sort();
        const byProduct = products
            .map(p => ({
                name: p,
                label: p.replace('Sociomile ', 'SM '),
                total: esc.filter(r => r.product === p).length,
                active: esc.filter(r => r.product === p && r.status !== 'Closed').length,
            }))
            .filter(x => x.total > 0);

        // By tier - dinamis dari data
        const tierSet = [...new Set(data.map(r => r.tier))].filter(Boolean).sort();
        const byTier = tierSet
            .map((t, i) => ({
                name: t,
                label: t,
                total: esc.filter(r => r.tier === t).length,
                active: esc.filter(r => r.tier === t && r.status !== 'Closed').length,
                color: CONFIG.CHART.colors[t] || ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5],
            }))
            .filter(x => x.total > 0);

        const byType = [
            { name: t('issue'), key: 'Issue', total: esc.filter(r => r.type === 'Issue').length, active: esc.filter(r => r.type === 'Issue' && r.status !== 'Closed').length, color: CONFIG.CHART.colors.issue },
            { name: t('nonIssue'), key: 'Non Issue', total: esc.filter(r => r.type === 'Non Issue').length, active: esc.filter(r => r.type === 'Non Issue' && r.status !== 'Closed').length, color: CONFIG.CHART.colors.non },
        ].filter(x => x.total > 0);

        const activeRows = active > 0 ? esc
            .filter(r => r.status !== 'Closed')
            .map((r, idx) => {
                const priColor = CONFIG.CHART.colors[r.priority] || CONFIG.CHART.colors.Low;
                const prodColor = CONFIG.CHART.colors[r.product] || CONFIG.CHART.colors.Tier1;
                const prodShort = r.product.replace('Sociomile ', 'SM ');
                const clientFull = r.client || '-';
                const clientMatch = clientFull.match(/^([^(]+)/);
                const clientShort = clientMatch ? clientMatch[1].trim() : clientFull;
                const compMatch = clientFull.match(/\(([^)]+)\)/);
                const company = compMatch ? compMatch[1] : '';
                const [dd, mm] = r.date.split('/');
                const ticketId = `ESC-${mm}${dd}-${String(idx + 1).padStart(2, '0')}`;

                return {
                    id: ticketId,
                    client: clientShort,
                    company,
                    problem: r.problem || '-',
                    product: prodShort,
                    productColor: prodColor,
                    priority: r.priority,
                    priorityColor: priColor,
                    date: r.date,
                    startTime: r.startTime || '',
                    shift: r.shift,
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
                const dates = [...new Set(data.map(r => r.date))].map(Utils.Date.parseDate).sort((a, b) => a - b);
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
                return rd >= prevFrom && rd <= prevTo;
            });
        }

        if (week !== 'all') {
            const weeks = CONFIG.DATES.weeks;
            const idx = weeks.indexOf(week);
            const prevWeek = idx > 0 ? weeks[idx - 1] : null;
            if (!prevWeek) return [];
            return data.filter(r => r.week === prevWeek && (month === 'all' || r.month === month));
        }

        const dates = [...new Set(data.map(r => r.date))].sort((a, b) => Utils.Date.parseDate(a) - Utils.Date.parseDate(b));
        if (dates.length < 2) return [];
        const half = Math.ceil(dates.length / 2);
        const prevSet = new Set(dates.slice(0, half));
        return data.filter(r => prevSet.has(r.date));
    },

    preparePriorityData(data) {
        const labels = CONFIG.PRIORITIES;
        const values = labels.map(p => data.filter(r => r.priority === p).length);
        const colors = labels.map(p => CONFIG.CHART.colors[p]);
        return { labels, values, colors };
    },

    prepareTierData(data) {
        const tiers = [...new Set(data.map(r => r.tier))].filter(Boolean).sort();
        
        if (tiers.length === 0) {
            return { labels: [], issue: [], nonIssue: [], totals: [] };
        }

        const labels = tiers;
        const issue = tiers.map(t => data.filter(r => r.tier === t && r.type === 'Issue').length);
        const nonIssue = tiers.map(t => data.filter(r => r.tier === t && r.type === 'Non Issue').length);
        const totals = tiers.map(t => data.filter(r => r.tier === t).length);
        
        return { labels, issue, nonIssue, totals };
    },

    prepareProductData(data) {
        const products = [...new Set(data.map(r => r.product))].sort();
        const labels = products.map(p => p.replace('Sociomile ', 'SM '));
        const issue = products.map(p => data.filter(r => r.product === p && r.type === 'Issue').length);
        const nonIssue = products.map(p => data.filter(r => r.product === p && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    prepareFeatureData(data) {
        const features = [...new Set(data.map(r => r.feature || 'Lainnya'))];
        const labels = features;
        const issue = features.map(f => data.filter(r => (r.feature || 'Lainnya') === f && r.type === 'Issue').length);
        const nonIssue = features.map(f => data.filter(r => (r.feature || 'Lainnya') === f && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

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

    prepareTrendData(data) {
        const allDates = [...new Set(data.map(r => r.date))].sort((a, b) => Utils.Date.parseDate(a) - Utils.Date.parseDate(b));
        const last7 = allDates.slice(-7);
        const days = t('days');
        const labels = last7.map(dt => {
            // dt format: "01/01/2026"
            const [dd, mm, yy] = dt.split('/').map(Number);
            // Ambil nama hari
            const dayName = days[new Date(yy, mm - 1, dd).getDay()];
            return `${dayName} ${dd}/${String(mm).padStart(2, '0')}`;
        });
        const issue = last7.map(dt => data.filter(r => r.date === dt && r.type === 'Issue').length);
        const nonIssue = last7.map(dt => data.filter(r => r.date === dt && r.type === 'Non Issue').length);
        return { labels, issue, nonIssue };
    },

    prepareShiftData(data) {
        const shifts = CONFIG.DATES.shifts;
        const labels = [t('morning'), t('day'), t('night')];
        const issue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Issue').length);
        const nonIssue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Non Issue').length);
        const totals = shifts.map(s => data.filter(r => r.shift === s).length);
        return { labels, issue, nonIssue, totals };
    },

    getStaffList(data) {
        return [...new Set(data.map(r => r.staff).filter(Boolean))].sort();
    },

    calculateAverageResponseTime(data) {
        let totalSeconds = 0;
        let count = 0;
        
        data.forEach(r => {
            if (r.ht) {
                const parts = r.ht.split(':').map(Number);
                if (parts.length === 3) {
                    totalSeconds += parts[0] * 3600 + parts[1] * 60 + parts[2];
                    count++;
                } else if (parts.length === 2) {
                    totalSeconds += parts[0] * 60 + parts[1];
                    count++;
                }
            }
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

    applyTicketFilters(data, filters) {
        const { month, week, dateFrom, dateTo, product, tier, shift, staff } = filters;

        return data.filter(r => {
            // Fix: Compare month correctly - both use full format like "[1] January 2026"
            if (month !== 'all' && r.month !== month) return false;
            if (week !== 'all' && r.week !== week) return false;

            if (dateFrom || dateTo) {
                const rd = Utils.Date.parseDate(r.date);
                const parseLocal = s => {
                    const parts = s.split('-').map(Number);
                    return new Date(parts[0], parts[1] - 1, parts[2]);
                };
                if (dateFrom && rd < parseLocal(dateFrom)) return false;
                if (dateTo) {
                    const toEnd = parseLocal(dateTo);
                    toEnd.setHours(23, 59, 59, 999);
                    if (rd > toEnd) return false;
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
        const { month, week, dateFrom, dateTo } = filters;

        return data.filter(t => {
            if (month !== 'all' && t.month !== month) return false;
            if (week !== 'all' && t.week !== week) return false;

            if (dateFrom || dateTo) {
                const td = Utils.Date.taskDateOnly(t.start);
                const parseLocal = s => {
                    const parts = s.split('-').map(Number);
                    return new Date(parts[0], parts[1] - 1, parts[2]);
                };
                if (dateFrom && td < parseLocal(dateFrom)) return false;
                if (dateTo) {
                    const toEnd = parseLocal(dateTo);
                    toEnd.setHours(23, 59, 59, 999);
                    if (td > toEnd) return false;
                }
            }

            return true;
        });
    },

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
            const weeks = CONFIG.DATES.weeks;
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

    getFilterSummary(filters) {
        const parts = [];
        if (filters.month !== 'all') {
            // Tampilkan tanpa prefix [1], [2], [3]
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

    createDoughnut(canvasId, labels, data, colors, cutout = CONFIG.CHART.cutout) {
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

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
    },

    createStackedBar(canvasId, labels, datasets, isHorizontal = false) {
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

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
                        labels: { color: getTickColor(), boxWidth: 10, font: CONFIG.CHART.font },
                    },
                    tooltip: { mode: 'index', intersect: false },
                },
                scales: {
                    x: {
                        stacked: true,
                        grid: { color: getGridColor() },
                        ticks: { color: getTickColor(), font: CONFIG.CHART.font },
                    },
                    y: {
                        stacked: true,
                        grid: { color: getGridColor() },
                        ticks: { color: getTickColor(), font: CONFIG.CHART.font },
                    },
                },
            },
            plugins: isHorizontal ? [this._plugins.horizontalEnd] : [this._plugins.stackTop],
        });

        this._charts[canvasId] = chart;
        return chart;
    },

    createSingleBar(canvasId, labels, data, colors) {
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

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
                        ticks: { color: getTickColor(), font: CONFIG.CHART.font },
                    },
                    y: {
                        grid: { color: getGridColor() },
                        ticks: { color: getTickColor(), font: CONFIG.CHART.font },
                    },
                },
            },
            plugins: [this._plugins.singleBarLabel],
        });

        this._charts[canvasId] = chart;
        return chart;
    },

    createLine(canvasId, labels, datasets) {
        this.destroy(canvasId);
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

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
                        labels: { color: getTickColor(), boxWidth: 10, font: CONFIG.CHART.font, padding: 14 },
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
                        ticks: { color: getTickColor(), font: CONFIG.CHART.font },
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: getGridColor() },
                        ticks: { color: getTickColor(), font: CONFIG.CHART.font, stepSize: 2 },
                    },
                },
            },
            plugins: [this._plugins.lineLabel],
        });

        this._charts[canvasId] = chart;
        return chart;
    },

    _plugins: {

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

    renderKPI(data, prevData, filterSummary) {
        const grid = document.getElementById('kpiGrid');
        if (!grid) return;

        const cur = DataProcessor.calculateKPIs(data);
        const prev = prevData ? DataProcessor.calculateKPIs(prevData) : null;
        const prevLabel = this._getPrevLabel();
        const hasPrev = prev !== null;

        // Hitung Average Response Time
        const avgResp = DataProcessor.calculateAverageResponseTime(data);
        const prevAvgResp = prevData ? DataProcessor.calculateAverageResponseTime(prevData) : null;
        const hasPrevResp = prevAvgResp !== null && prevAvgResp.count > 0;

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
                id: 'sla',
                value: `${cur.slaRate}%`,
                color: '#10b981',
                sub: t('subSLA'),
                delta: hasPrev ? this._deltaTag(cur.slaRate, prev.slaRate, false) : null,
            },
            {
                id: 'avgResponseTime',
                value: avgResp.count > 0 ? `${avgResp.formatted}` : '0s',
                color: '#8b5cf6',
                sub: t('subAHT'), // Gunakan subtitle yang sama dengan AHT
                delta: hasPrevResp ? this._deltaRespTime(avgResp.avgSeconds, prevAvgResp.avgSeconds) : null,
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
                    <td><div style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:var(--accent)">${r.id}</div></td>
                    <td>
                        <div class="esc-client">${r.client}</div>
                        ${r.company ? `<div class="esc-client-full">${r.company}</div>` : ''}
                    </td>
                    <td><div class="esc-problem">${r.problem}</div></td>
                    <td><span class="esc-prod-badge" style="background:${Utils.Color.toRGBA(r.productColor, 0.15)};color:${r.productColor}">${r.product}</span></td>
                    <td><span class="esc-pri-badge" style="background:${Utils.Color.toRGBA(r.priorityColor, 0.2)};color:${r.priorityColor}">${r.priority}</span></td>
                    <td><div class="esc-date">${r.date}</div><div style="font-size:10px;color:var(--text-muted)">${r.startTime}</div></td>
                    <td><span style="font-size:11px;padding:2px 7px;border-radius:4px;background:var(--surface-3);color:var(--text-sec)">${r.shift}</span></td>
                </tr>
            `).join('');

            html += `
                <div class="esc-active-detail">
                    <div class="esc-active-title">${t('activeEscalation', { count: stats.active, plural: stats.active > 1 ? 's' : '' })}</div>
                    <div class="esc-table-wrapper">
                        <table class="esc-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>${t('thStaff')}</th>
                                    <th>${t('thTask')}</th>
                                    <th>${t('thTag')}</th>
                                    <th>${t('thStatus')}</th>
                                    <th>${t('thDate')}</th>
                                    <th>${t('thDuration')}</th>
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

    renderCharts(data) {
        this._renderPriorityChart(data);
        this._renderTierChart(data);
        this._renderProductChart(data);
        this._renderFeatureChart(data);
        this._renderStaffChart(data);
        this._renderTrendChart(data);
        this._renderShiftChart(data);
    },

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

    _renderTierChart(data) {
        const chartData = DataProcessor.prepareTierData(data);
        ChartEngine.createStackedBar(
            'chartTier',
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );

        // Di _renderTierChart, ganti legend menjadi:
        const legend = document.getElementById('legendTier');
        if (legend) {
            legend.innerHTML = `
                <div class="legend-item"><div class="legend-dot" style="background:${CONFIG.CHART.colors.issue}"></div>${t('issue')}</div>
                <div class="legend-item"><div class="legend-dot" style="background:${CONFIG.CHART.colors.non}"></div>${t('nonIssue')}</div>
                ${chartData.labels.map((tier, i) => {
                    const color = CONFIG.CHART.colors[tier] || ['#5b73ff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5];
                    return `<div class="legend-item"><div class="legend-dot" style="background:${color}"></div>${tier} <strong>${chartData.totals[i]}</strong></div>`;
                }).join('')}
            `;
        }
    },

    _renderProductChart(data) {
        const chartData = DataProcessor.prepareProductData(data);
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

    _renderFeatureChart(data) {
        const chartData = DataProcessor.prepareFeatureData(data);
        ChartEngine.createStackedBar(
            'chartFeature',
            chartData.labels,
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );
    },

    _renderStaffChart(data) {
        const chartData = DataProcessor.prepareStaffData(data);
        if (chartData.labels.length === 0) {
            const container = document.getElementById('chartTicketStaff')?.parentElement;
            if (container) container.innerHTML = `<div class="task-empty">${t('noData')}</div>`;
            return;
        }
        ChartEngine.createSingleBar('chartTicketStaff', chartData.labels, chartData.values);
    },

    _renderTrendChart(data) {
        const chartData = DataProcessor.prepareTrendData(data);
        
        // Format label menjadi dd/mm
        const labels = chartData.labels.map(label => {
            // label format: "Min 01/01" -> ambil tanggalnya
            const parts = label.split(' ');
            return parts.length > 1 ? parts[1] : label;
        });
        
        ChartEngine.createLine(
            'chartTrend',
            labels, // Gunakan labels yang sudah diformat
            [
                { label: t('issue'), data: chartData.issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: chartData.nonIssue, color: CONFIG.CHART.colors.non },
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

    _renderShiftChart(data) {
        // Get unique shifts from data
        const shifts = [...new Set(data.map(r => r.shift))].filter(Boolean).sort();
        
        // If no data, show empty
        if (shifts.length === 0 || data.length === 0) {
            const container = document.getElementById('chartShift')?.parentElement;
            if (container) container.innerHTML = `<div class="task-empty">${t('noData')}</div>`;
            return;
        }

        // Prepare data for chart
        const issue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Issue').length);
        const nonIssue = shifts.map(s => data.filter(r => r.shift === s && r.type === 'Non Issue').length);
        const totals = shifts.map(s => data.filter(r => r.shift === s).length);

        // Colors for shifts (dynamic)
        const shiftColors = {};
        const palette = ['#f59e0b', '#5b73ff', '#8b5cf6', '#10b981', '#f43f5e', '#06b6d4', '#fb923c'];
        shifts.forEach((shift, i) => {
            shiftColors[shift] = palette[i % palette.length];
        });

        // Update chart subtitle with actual shifts
        const subtitleEl = document.getElementById('chartShiftSub');
        if (subtitleEl) {
            subtitleEl.textContent = shifts.join(' · ');
        }

        ChartEngine.createStackedBar(
            'chartShift',
            shifts, // labels from data
            [
                { label: t('issue'), data: issue, color: CONFIG.CHART.colors.issue },
                { label: t('nonIssue'), data: nonIssue, color: CONFIG.CHART.colors.non },
            ]
        );

        // Legend with dynamic shifts
        const legend = document.getElementById('legendShift');
        if (legend) {
            legend.innerHTML = shifts.map((shift, i) => `
                <div class="legend-item">
                    <div class="legend-dot" style="background:${shiftColors[shift]}"></div>
                    ${shift} <strong style="color:${shiftColors[shift]}">${totals[i]}</strong>
                </div>
            `).join('');
        }
    },

    renderTaskSection(tasks, filters) {
        const filtered = FilterEngine.applyTaskFilters(tasks, filters);
        const prevData = FilterEngine.getPreviousTaskData(tasks, filters);
        const prevMetrics = prevData.length ? DataProcessor.calculateTaskMetrics(prevData) : null;
        const prevLabel = this._getPrevLabel();

        const metrics = DataProcessor.calculateTaskMetrics(filtered);
        const completionRate = metrics.total > 0 ? Math.round((metrics.done / metrics.total) * 100) : 0;
        const totalHours = (metrics.totalMinutes / 60).toFixed(1);

        const taskStats = [
            { id: 'totalTasks', value: metrics.total, color: '#5b73ff', sub: t('totalTasks') },
            { id: 'done', value: metrics.done, color: '#10b981', sub: `${completionRate}% ${t('completed')}` },
            { id: 'progress', value: metrics.progress, color: '#f59e0b', sub: t('inProgress') },
            { id: 'totalWorkHours', value: `${totalHours}h`, color: '#8b5cf6', sub: `${metrics.staffCount} ${t('activeStaff')}` },
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
            const initials = Utils.String.getInitials(t.staff);
            const tags = (t.note || '').split(' ').filter(x => x.startsWith('#'));
            const tagHtml = tags.length ?
                tags.map(tag => `<span class="task-tag">${tag}</span>`).join(' ') :
                (t.note ? `<span style="font-size:11px;color:var(--text-muted)">${t.note}</span>` : '-');
            const staffShort = t.staff.split(' ').slice(0, 2).join(' ');

            return `<tr>
                <td><div class="task-staff-cell"><div class="task-avatar">${initials}</div><span>${staffShort}</span></div></td>
                <td><div class="task-name">${t.task}</div></td>
                <td>${tagHtml}</td>
                <td><div class="task-duration">${t.duration}</div></td>
                <td><span class="task-status-badge" style="background:${Utils.Color.toRGBA(statusColor, 0.18)};color:${statusColor}">${t.status}</span></td>
                <td><div class="task-date">${Utils.Date.formatTaskDate(t.start)}</div></td>
            </tr>`;
        }).join('');

        this._renderPagination(filtered.length, totalPages);
    },

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

    _deltaAHT(cur, prev) {
        if (prev === 0 && cur === 0) return `<span class="kpi-delta neutral">→ 0%</span>`;
        if (prev === 0) return '';
        const diff = cur - prev;
        const pct = Math.abs(Math.round((diff / prev) * 100));
        if (diff === 0) return `<span class="kpi-delta neutral">→ 0%</span>`;
        if (diff > 0) return `<span class="kpi-delta down-bad">↑ +${pct}%</span>`;
        return `<span class="kpi-delta up-good">↓ −${pct}%</span>`;
    },

    _getPrevLabel() {
        const { week, dateFrom, dateTo } = appState.filters;
        if (dateFrom || dateTo) return t('vsPrevPeriod');
        if (week !== 'all') return t('vsPrevWeek');
        return t('vsPrevHalf');
    },

    /** Populate dynamic filters from data */
    populateDynamicFilters(tickets, tasks) {
        console.log('🔄 Populating dynamic filters...');
        console.log('Tickets count:', tickets.length);
        console.log('Tasks count:', tasks.length);

        this._populateMonthFilter(tickets);
        this._populateWeekFilter(tickets);
        this._populateProductFilter(tickets);
        this._populateTierFilter(tickets);
        this._populateShiftFilter(tickets);
        this._populateStaffFilter(tickets);
        this._populateTaskStaffFilter(tasks);

        console.log('✅ Dynamic filters populated');
    },

    /** Populate month filter from ticket data */
    _populateMonthFilter(tickets) {
        const select = document.getElementById('filterMonth');
        if (!select) {
            console.warn('❌ filterMonth element not found');
            return;
        }

        console.log('📊 Total tickets for month filter:', tickets.length);

        // Ambil month dari data, filter yang kosong
        const months = [...new Set(tickets.map(r => r.month))].filter(Boolean);
        console.log('📅 Months found:', months);

        // Jika tidak ada month, coba cek data pertama
        if (months.length === 0) {
            console.warn('⚠️ No months found!');
            if (tickets.length > 0) {
                console.log('Sample ticket:', tickets[0]);
                console.log('Sample ticket keys:', Object.keys(tickets[0]));
            }
            return;
        }

        // Urutkan bulan berdasarkan format [1], [2], [3]
        months.sort(function(a, b) {
            var numA = parseInt(a.match(/\[(\d+)\]/)?.[1] || 0);
            var numB = parseInt(b.match(/\[(\d+)\]/)?.[1] || 0);
            return numA - numB;
        });

        const currentVal = select.value;

        // Reset select, hanya sisakan option "Semua Bulan"
        select.innerHTML = '<option value="all">' + t('allMonths') + '</option>';

        // Tambahkan setiap bulan sebagai option
        months.forEach(function(month) {
            const opt = document.createElement('option');
            opt.value = month; // Value tetap "[1] January 2026"
            // Tampilkan tanpa prefix [1]
            var display = month.replace(/\[\d+\]\s*/, '');
            opt.textContent = display;
            select.appendChild(opt);
            console.log('➕ Added month option:', month, '→ display:', display);
        });

        // Kembalikan ke nilai sebelumnya jika masih ada
        if (Array.from(select.options).some(function(o) { return o.value === currentVal; })) {
            select.value = currentVal;
        }

        console.log('✅ Month filter populated with', months.length, 'months');

        // Jika months masih kosong, coba hardcode dulu untuk test
        if (months.length === 0) {
            console.warn('⚠️ No months found in data, using fallback');
            // Coba ambil dari data mentah
            const rawMonths = tickets.map(function(r) { return r.month; });
            console.log('Raw months:', rawMonths.slice(0, 10));
            
            // Jika benar-benar kosong, tambahkan manual
            if (rawMonths.every(function(m) { return !m; })) {
                console.error('❌ All months are empty! Check data mapping.');
                return;
            }
        }
    },

    /** Populate week filter from ticket data */
    _populateWeekFilter(tickets) {
        const select = document.getElementById('filterWeek');
        if (!select) {
            console.warn('❌ filterWeek element not found');
            return;
        }

        console.log('📊 Total tickets for week filter:', tickets.length);

        // Ambil week dari data, filter yang kosong
        const weeks = [...new Set(tickets.map(r => r.week))].filter(Boolean);
        console.log('📅 Weeks found:', weeks);

        if (weeks.length === 0) {
            console.warn('⚠️ No weeks found!');
            if (tickets.length > 0) {
                console.log('Sample ticket:', tickets[0]);
            }
            return;
        }

        // Urutkan week (Week 1, Week 2, dst)
        weeks.sort(function(a, b) {
            var numA = parseInt(a.match(/\d+/)?.[0] || 0);
            var numB = parseInt(b.match(/\d+/)?.[0] || 0);
            return numA - numB;
        });

        const currentVal = select.value;

        // Reset select, hanya sisakan option "Semua Minggu"
        select.innerHTML = '<option value="all">' + t('allWeeks') + '</option>';

        // Tambahkan setiap minggu sebagai option
        weeks.forEach(function(week) {
            const opt = document.createElement('option');
            opt.value = week;
            opt.textContent = week;
            select.appendChild(opt);
            console.log('➕ Added week option:', week);
        });

        // Kembalikan ke nilai sebelumnya jika masih ada
        if (Array.from(select.options).some(function(o) { return o.value === currentVal; })) {
            select.value = currentVal;
        }

        console.log('✅ Week filter populated with', weeks.length, 'weeks');
    },

    /** Populate product filter from ticket data */
    _populateProductFilter(tickets) {
        const select = document.getElementById('filterProduct');
        if (!select) return;

        const products = [...new Set(tickets.map(r => r.product))].filter(Boolean).sort();
        const currentVal = select.value;

        select.innerHTML = '<option value="all">' + t('allProducts') + '</option>';

        products.forEach(product => {
            const opt = document.createElement('option');
            opt.value = product;
            opt.textContent = product;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }
    },

    /** Populate tier filter from ticket data (dari ClientCategory) */
    _populateTierFilter(tickets) {
        const select = document.getElementById('filterTier');
        if (!select) return;

        const tiers = [...new Set(tickets.map(r => r.tier))].filter(Boolean).sort();
        const currentVal = select.value;

        console.log('📊 Tiers found from data:', tiers);

        select.innerHTML = '<option value="all">' + t('allTiers') + '</option>';

        tiers.forEach(tier => {
            const opt = document.createElement('option');
            opt.value = tier;
            opt.textContent = tier;
            select.appendChild(opt);
            console.log('➕ Added tier option:', tier);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }

        console.log('✅ Tier filter populated with', tiers.length, 'tiers');
    },

    /** Populate shift filter from ticket data */
    _populateShiftFilter(tickets) {
        const select = document.getElementById('filterShift');
        if (!select) return;

        const shifts = [...new Set(tickets.map(r => r.shift))].filter(Boolean).sort();
        const currentVal = select.value;

        select.innerHTML = '<option value="all">' + t('allShifts') + '</option>';

        shifts.forEach(shift => {
            const opt = document.createElement('option');
            opt.value = shift;
            opt.textContent = shift;
            select.appendChild(opt);
        });

        if (Array.from(select.options).some(o => o.value === currentVal)) {
            select.value = currentVal;
        }
    },

    /** Populate staff filter from ticket data (dari Create By) */
    _populateStaffFilter(tickets) {
        const select = document.getElementById('filterStaff');
        if (!select) return;

        const staffs = [...new Set(tickets.map(r => r.staff))].filter(Boolean).sort();
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

    /** Populate task staff filter from task data */
    _populateTaskStaffFilter(tasks) {
        const select = document.getElementById('taskFilterStaffSelect');
        if (!select) return;

        const staffs = [...new Set(tasks.map(t => t.staff))].filter(Boolean).sort();
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

    _deltaRespTime(curSeconds, prevSeconds) {
        if (prevSeconds === 0 && curSeconds === 0) return `<span class="kpi-delta neutral">→ 0s</span>`;
        if (prevSeconds === 0) return `<span class="kpi-delta up-good">↑ new</span>`;
        
        const diff = curSeconds - prevSeconds;
        const pct = Math.abs(Math.round((diff / prevSeconds) * 100));
        
        if (diff === 0) return `<span class="kpi-delta neutral">→ 0%</span>`;
        if (diff < 0) return `<span class="kpi-delta up-good">↓ −${pct}%</span>`;
        return `<span class="kpi-delta down-bad">↑ +${pct}%</span>`;
    },
};

/* ================================================================
   EVENT HANDLERS
   ================================================================ */

const EventHandlers = {

    init() {
        const filterIds = ['filterMonth', 'filterWeek', 'filterProduct', 'filterTier', 'filterShift', 'filterStaff'];
        filterIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => this.onFilterChange());
        });

        ['filterDateFrom', 'filterDateTo'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => this.onFilterChange());
        });

        const resetBtn = document.getElementById('btnResetFilters');
        if (resetBtn) resetBtn.addEventListener('click', () => this.onResetFilters());

        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const menu = tab.dataset.menu;
                if (menu) this.onMenuChange(menu);
            });
        });

        document.getElementById('btnLang')?.addEventListener('click', () => {
            const currentLang = appState.ui.language;
            const newLang = currentLang === 'id' ? 'en' : 'id';
            this.onLanguageChange(newLang);
        });

        document.getElementById('btnTheme')?.addEventListener('click', () => {
            toggleTheme();
            this.refreshUI();
        });

        document.getElementById('btnRefresh')?.addEventListener('click', () => this.onRefresh());
        document.getElementById('syncBadge')?.addEventListener('click', () => this.onRefresh());

        const searchInput = document.getElementById('taskSearchInput');
        if (searchInput) {
            const debounced = Utils.debounce(() => this.onTaskSearch(), 300);
            searchInput.addEventListener('input', debounced);
        }

        ['taskFilterStaffSelect', 'taskFilterStatusSelect'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', () => this.onTaskFilterChange());
        });
    },

    onFilterChange() {
        this._readFilters();
        this.validateFilters();
        // Baca ulang filter setelah validate (karena validate bisa mengubah nilai)
        this._readFilters();
        this._applyFilters();
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

        this._readFilters();
        this.validateFilters();
        this._readFilters(); // Baca ulang setelah validate
        this._applyFilters();
        this.refreshUI();
    },

    onMenuChange(menu) {
        appState.ui.currentMenu = menu;

        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.menu === menu);
        });

        document.querySelectorAll('.menu-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `panel${Utils.String.capitalize(menu)}`);
        });

        const dimGroup = document.getElementById('filterDimensionGroup');
        const dimSep = document.getElementById('filterSeparatorDim');
        if (dimGroup) dimGroup.style.display = menu === 'ticket' ? '' : 'none';
        if (dimSep) dimSep.style.display = menu === 'ticket' ? '' : 'none';
    },

    onLanguageChange(lang) {
        appState.ui.language = lang;
        const btnLang = document.getElementById('btnLang');
        if (btnLang) {
            btnLang.textContent = lang === 'id' ? '🌐 ID' : '🌐 EN';
            btnLang.classList.toggle('on', lang === 'id');
        }
        this.refreshUI();
    },

    onRefresh() {
        this._refreshData();
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

        // Debug: cek filter values
        console.log('Filters read:', appState.filters);
    },

    _applyFilters() {
        const filters = appState.filters;

        console.log('Applying filters:', filters);
        console.log('Total tickets before filter:', appState.tickets.length);

        appState.filteredTickets = FilterEngine.applyTicketFilters(appState.tickets, filters);
        appState.filteredTasks = FilterEngine.applyTaskFilters(appState.tasks, filters);

        console.log('Filtered tickets:', appState.filteredTickets.length);

        const totalPages = Utils.Array.totalPages(appState.filteredTasks, CONFIG.PAGINATION.pageSize);
        if (appState.ui.taskPage > totalPages) appState.ui.taskPage = totalPages || 1;
    },

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
        
        this.validateFilters(); // <-- TAMBAHKAN INI
    },

    validateFilters() {
        const month = document.getElementById('filterMonth')?.value || 'all';
        const week = document.getElementById('filterWeek')?.value || 'all';
        const dateFrom = document.getElementById('filterDateFrom')?.value || '';
        const dateTo = document.getElementById('filterDateTo')?.value || '';
        
        const monthSelect = document.getElementById('filterMonth');
        const weekSelect = document.getElementById('filterWeek');
        const dateFromInput = document.getElementById('filterDateFrom');
        const dateToInput = document.getElementById('filterDateTo');
        
        // Case 1: Month atau Week dipilih (bukan 'all')
        const isPeriodSelected = (month !== 'all' || week !== 'all');
        
        if (isPeriodSelected) {
            // Lock date range
            dateFromInput.disabled = true;
            dateToInput.disabled = true;
            dateFromInput.style.opacity = '0.5';
            dateToInput.style.opacity = '0.5';
            dateFromInput.style.cursor = 'not-allowed';
            dateToInput.style.cursor = 'not-allowed';
            
            // Auto fill date range berdasarkan month/week
            const range = getDateRangeFromFilters(appState.tickets, month, week);
            if (range.from && range.to) {
                dateFromInput.value = range.from;
                dateToInput.value = range.to;
            }
            
            // Unlock month & week
            monthSelect.disabled = false;
            weekSelect.disabled = false;
            monthSelect.style.opacity = '1';
            weekSelect.style.opacity = '1';
            monthSelect.style.cursor = 'pointer';
            weekSelect.style.cursor = 'pointer';
            
        } else {
            // Unlock date range
            dateFromInput.disabled = false;
            dateToInput.disabled = false;
            dateFromInput.style.opacity = '1';
            dateToInput.style.opacity = '1';
            dateFromInput.style.cursor = 'pointer';
            dateToInput.style.cursor = 'pointer';
        }
        
        // Case 2: Date Range dipilih (hanya jika month & week = 'all')
        const isDateRangeSelected = (dateFrom !== '' || dateTo !== '');
        const isPeriodAll = (month === 'all' && week === 'all');
        
        if (isDateRangeSelected && isPeriodAll) {
            // Lock month & week
            monthSelect.disabled = true;
            weekSelect.disabled = true;
            monthSelect.style.opacity = '0.5';
            weekSelect.style.opacity = '0.5';
            monthSelect.style.cursor = 'not-allowed';
            weekSelect.style.cursor = 'not-allowed';
            
            // Pastikan month & week tetap 'all'
            monthSelect.value = 'all';
            weekSelect.value = 'all';
            
        } else if (!isDateRangeSelected && !isPeriodSelected) {
            // Unlock month & week jika tidak ada filter yang dipilih
            monthSelect.disabled = false;
            weekSelect.disabled = false;
            monthSelect.style.opacity = '1';
            weekSelect.style.opacity = '1';
            monthSelect.style.cursor = 'pointer';
            weekSelect.style.cursor = 'pointer';
        }
        
        // BACA ULANG filter yang sudah diubah
        this._readFilters();
    },
};

/* ================================================================
   APPLICATION INITIALIZATION
   ================================================================ */

const App = {

    async init() {
        const success = await DataLoader.load();

        console.log('📊 Data loaded, success:', success);
        console.log('📊 Tickets:', appState.tickets.length);
        console.log('📊 Tasks:', appState.tasks.length);

        // Debug: cek sample data
        if (appState.tickets.length > 0) {
            console.log('📊 Sample ticket:', appState.tickets[0]);
            console.log('📊 Sample ticket month:', appState.tickets[0].month);
            console.log('📊 Sample ticket week:', appState.tickets[0].week);
        }

        if (success) {
            UIRenderer.updateSyncStatus('live', appState.meta.lastSync);
        } else if (window.location.protocol === 'file:') {
            UIRenderer.updateSyncStatus('fileproto', null);
        } else {
            UIRenderer.updateSyncStatus('error', null);
        }

        document.documentElement.setAttribute('data-theme', appState.ui.theme);
        document.getElementById('btnTheme').textContent = appState.ui.theme === 'dark' ? '🌙' : '☀️';

        EventHandlers._readFilters();
        EventHandlers._applyFilters();

        EventHandlers.init();
        EventHandlers.refreshUI();

        UIRenderer.populateDynamicFilters(appState.tickets, appState.tasks);

        setInterval(() => {
            EventHandlers.onRefresh();
        }, CONFIG.APP.refreshInterval);

        console.log(`${CONFIG.APP.name} v${CONFIG.APP.version} initialized`);
        console.log(`Data source: ${appState.meta.dataSource}`);
        console.log(`Tickets: ${appState.tickets.length}, Tasks: ${appState.tasks.length}`);
    },
};

/* ================================================================
   BOOT
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Tambahkan di DataLoader atau buat fungsi baru di luar

// Pindahkan fungsi ini ke bagian UTILITY FUNCTIONS atau di atas EventHandlers
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
    
    const dates = filtered.map(r => Utils.Date.parseDate(r.date)).filter(d => !isNaN(d));
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